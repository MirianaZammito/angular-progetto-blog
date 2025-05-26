import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { LoginRequest } from '../../models/login/login-request';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  error = false;

  constructor(private auth: AuthService, private router: Router) {}

  // Metodo per gestire il login
  // Utilizza il servizio AuthService per effettuare la richiesta di login
  onLogin(): void {
    const request: LoginRequest = { username: this.username, password: this.password };
    this.auth.login(request).subscribe(success => {
      this.error = !success;
      if (success) {
        this.router.navigate(['/homepage']);
      }
    });
  }
}