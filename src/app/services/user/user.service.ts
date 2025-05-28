import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

import { LoginRequest } from '../../models/login/login-request';
import { RegisterRequest } from '../../models/register/register-request';
import { User } from '../../models/user';
import { environment } from '../../environment/environment';
import { LoginResponse } from '../../models/login/login-response';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, data);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

 getUserById(userId: string): Observable<User> {
  return this.http.get<User>(`${this.apiUrl}/${userId}`);
}

setUser(user: User): Observable<User> {
  return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);  
}

updateAvatar(userId: string, avatarUrl: string): Observable<User> {
  return this.http.patch<User>(`${environment.apiUrl}/users/${userId}`, { avatarUrl });
}

checkUsername(username: string): Observable<boolean> {
  return this.http.get<User[]>(`${environment.apiUrl}/users?username=${username}`)
    .pipe(
      map(users => users.length > 0), // true se almeno 1 utente con username
      catchError(() => of(false)) // in caso di errore, consideriamo che username non esiste
    );
}

checkEmail(email: string): Observable<boolean> {
  return this.http.get<User[]>(`${environment.apiUrl}/users?email=${email}`)
    .pipe(
      map(email => email.length > 0), // true se almeno 1 utente con email
      catchError(() => of(false)) // in caso di errore, consideriamo che email non esiste
    );
}
}


