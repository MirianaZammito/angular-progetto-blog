import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { LoginRequest } from '../models/login/login-request';
import { environment } from '../environment/environment';
import { LoginResponse } from '../models/login/login-response';
import { UserService } from '../services/user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Chiavi per salvare utente e token nel localStorage
  private readonly userKey = 'user';
  private readonly tokenKey = 'token';

  // BehaviorSubject per tracciare lo stato di autenticazione
  private _isAuthenticated = new BehaviorSubject<boolean>(this.hasToken());
  // Observable pubblico per lo stato di autenticazione
  isAuthenticated$ = this._isAuthenticated.asObservable();

  // BehaviorSubject per tracciare l'utente autenticato
  private userSubject = new BehaviorSubject<User | null>(this.getUser());
  // Observable pubblico per l'utente autenticato
  user$ = this.userSubject.asObservable();

  constructor(private userService: UserService, private router: Router) {}


  // Effettua il login confrontando le credenziali con gli utenti esistenti.
  // Se le credenziali sono corrette, salva il token e l'utente nel localStorage.
  login(request: LoginRequest): Observable<boolean> {
    return this.userService.getUsers().pipe(
      map((users: User[]) => {
        const userFound = users.find(
          user =>
            user.username === request.username &&
            user.password === request.password
        );
        if (userFound) {
          // Genera un token fittizio e salva la sessione
          const token = 'fake-token-' + userFound.id;
          this.setSession({ user: userFound, token });
          return true;
        }
        return false;
      })
    );
  }

  // Salva token e utente nel localStorage e aggiorna lo stato di autenticazione.
  private setSession(response: LoginResponse): void {
    localStorage.setItem(this.tokenKey, response.token);
    localStorage.setItem(this.userKey, JSON.stringify(response.user));
    this._isAuthenticated.next(true);
    this.userSubject.next(response.user);
  }


  //Effettua il logout rimuovendo dati dal localStorage e reindirizzando al login.
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this._isAuthenticated.next(false);
    this.userSubject.next(null); 
    this.router.navigate(['/login']);
  }

  // Restituisce lo stato di autenticazione corrente.
  isAuthenticated(): boolean {
    return this._isAuthenticated.value;
  }

  // Restituisce l'utente autenticato dal localStorage, o null se non esiste.
  getUser(): User | null {
    const data = localStorage.getItem(this.userKey);
    return data ? JSON.parse(data) : null;
  }


  // Verifica se esiste un token salvato nel localStorage.
  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  // Aggiorna l'utente corrente e notifica i componenti che usano user$.  
  setUser(user: User): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.userSubject.next(user); 
  }
}