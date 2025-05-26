import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../models/post';
import { UserService } from '../../../services/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { PostUpsertModalComponent } from '../post-upsert-modal/post-upsert-modal.component';
import { PostService } from '../../../services/post/post.service';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  // Input properties ricevuti dal componente padre
  @Input() isProfilePage = false;
  @Input() currentUsername = '';
  @Input() posts: Post[] = [];

  constructor(private userService: UserService, private postService: PostService, private dialog: MatDialog) {}

  //
  ngOnInit(): void {
    // Se il componente è in modalità profilo, carica i post dell'utente corrente
    if (this.isProfilePage && this.currentUsername) {
      this.postService.getPostsByUsername(this.currentUsername).subscribe(posts => {
        this.posts = posts;
      });
    }
  }

  // Metodo per aprire il modal di aggiunta o modifica post
  onPostEdited(updated: Post): void {
    const index = this.posts.findIndex(p => p.id === updated.id);
    if (index !== -1) {
      this.posts[index] = updated;
    }
  }

  // Metodo per eliminare un post tramite id 
  onDelete(postId: string): void {
    this.posts = this.posts.filter(post => post.id !== postId);
  }
}
