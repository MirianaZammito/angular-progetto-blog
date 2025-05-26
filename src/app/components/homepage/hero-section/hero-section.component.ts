import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: false,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit {
  isAuthenticated: boolean = false; 

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    // Controlla lo stato di autenticazione all'inizializzazione del componente
    this.auth.isAuthenticated$.subscribe((authStatus) => {
      this.isAuthenticated = authStatus;
    });
  }
}
