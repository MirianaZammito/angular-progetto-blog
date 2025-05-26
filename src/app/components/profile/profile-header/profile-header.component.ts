import { Component, Inject, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../models/user';
import { Post } from '../../../models/post';
import { environment } from '../../../environment/environment';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-profile-header',
  standalone: false,
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit, OnDestroy {
  userLogged: User | null = null;
  defaultAvatar = 'assets/default-avatar.png';
  private userSub?: Subscription;

  // Emette l'evento quando viene aggiunto un nuovo post
  @Output() postAdded = new EventEmitter<Post>();

  constructor(
    @Inject(AuthService) private auth: AuthService,
    private userService: UserService 
  ) {}

  ngOnInit(): void {
    this.userSub = this.auth.user$.subscribe(user => {
      this.userLogged = user;
    });
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }

  // Riceve l'evento dal bottone e lo propaga al padre
  onPostAdded(post: Post) {
    this.postAdded.emit(post);
  }

onAvatarChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0] && this.userLogged) {
      const file = input.files[0];

      if (!file.type.startsWith('image/')) {
        alert('Puoi caricare solo immagini!');
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert('L\'immagine è troppo grande (max 2MB)');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const avatarUrl = e.target.result;
        this.userLogged!.avatarUrl = avatarUrl;
        this.auth.setUser(this.userLogged!);
        if (this.userLogged!.id) {
          this.userService.updateAvatar(this.userLogged!.id, avatarUrl).subscribe();
        } else {
          console.error('User ID is undefined, cannot update avatar.');
        }
      };
      reader.readAsDataURL(file);
    }
}
}