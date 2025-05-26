import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { environment } from '../../environment/environment';
import { Post } from '../../models/post';


@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = `${environment.apiUrl}/posts`;

  // Subject per notificare l'aggiunta di un post
  private postAddedSubject = new Subject<Post>();
  postAdded$ = this.postAddedSubject.asObservable();

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPost(postId: string): Observable<Post | undefined> {
    return this.getPosts().pipe(
      map((posts) => posts.find((post) => post.id === postId))
    );
  }

  addPost(post: Post): Observable<Post> {
  return this.http.post<Post>(this.apiUrl, post).pipe(
    map((createdPost) => {
      this.postAddedSubject.next(createdPost); // Notifica l'aggiunta
      return createdPost;
    })
  );
}

  editPost(post: Post, postId: string): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${postId}`, post);
  }

  deletePost(postId: string): Observable<Post> {
    return this.http.delete<Post>(`${this.apiUrl}/${postId}`);
  }

  getPostsByUsername(username: string): Observable<Post[]> {
    return this.getPosts().pipe(
      map((posts) => posts.filter((post) => post.authorUsername === username))
    );
  }
}