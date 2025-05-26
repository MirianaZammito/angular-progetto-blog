import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../models/post';
import { UserService } from '../../services/user/user.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  isAuthenticated: boolean = false;
  currentUsername: string = '';
  posts: Post[] = [];

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private userService: UserService 
  ) {}

  // All'avvio, recupera l'utente e carica i suoi post
  ngOnInit() {
    const user = this.authService.getUser();
    if (user) {
      this.currentUsername = user.username;
      this.loadPosts();
    }
  }

  // Carica i post dell'utente loggato
  loadPosts() {
    const user = this.authService.getUser();
    this.postService.getPosts().subscribe(posts => {
      // Filtra solo i post dell'utente loggato
      const userPosts = posts.filter(post => post.authorId === user?.id);

      // Se ci sono post dell'utente, recupera i dettagli dell'autore per ciascun post
      if (userPosts.length > 0) {
        forkJoin(
          userPosts.map(post =>
            this.userService.getUserById(post.authorId).pipe(
              // aggiungi il nome autore a ciascun post
              map(author => ({
                ...post,
                authorUsername: author.username
              }))
            )
          )

        ).subscribe(postsWithAuthor => {
          this.posts = postsWithAuthor;
        });
      } else {
        this.posts = [];
      }
    });
  }

  // Aggiunge un nuovo post alla lista dopo averlo salvato tramite il servizio
  onAddPost(newPost: Post) {
    this.postService.addPost(newPost).subscribe(post => {
      // Recupera il nome autore tramite id anche per il nuovo post
      this.userService.getUserById(post.authorId).subscribe(author => {
        this.posts.push({
          ...post,
          authorUsername: author.username
        });
      });
    });
  }
}