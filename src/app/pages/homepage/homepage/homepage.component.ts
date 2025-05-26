import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
    isAuthenticated: boolean = false; 

  constructor(private auth: AuthService, private router: Router) { }
    ngOnInit() {
    // Controlla lo stato di autenticazione all'inizializzazione del componente
    this.auth.isAuthenticated$.subscribe((authStatus) => {
      this.isAuthenticated = authStatus;
    });
  }
}
