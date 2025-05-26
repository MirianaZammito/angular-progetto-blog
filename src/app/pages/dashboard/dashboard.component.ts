import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isAuthenticated: boolean = false;
  posts: Post[] = [];

  constructor(
    private authService: AuthService,
    private postService: PostService
  ) {}

  // All'avvio, controlla se l'utente è autenticato e carica i post
  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    if (this.isAuthenticated) {
      this.loadPosts();
    }
  }

  // Carica i post dal servizio PostService
  loadPosts(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
