import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../services/user/user.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false; 
  userLogged: User | null = null;
  defaultAvatar = 'assets/default-avatar.png';
  private subs = new Subscription();

  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.subs.add(
      this.auth.isAuthenticated$.subscribe(authStatus => {
        this.isAuthenticated = authStatus;
      })
    );
    this.subs.add(
      this.auth.user$.subscribe(user => {
        this.userLogged = user;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  logout() {
    this.auth.logout(); 
    this.router.navigate(['/homepage']);  
  }
}
