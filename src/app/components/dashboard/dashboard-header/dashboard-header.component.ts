import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-dashboard-header',
  standalone: false,
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss'
})
// DashboardHeaderComponent mostra le informazioni dell'utente loggato
export class DashboardHeaderComponent implements OnInit {
  userLogged: User | null = null; 

  constructor(@Inject(AuthService) private auth: AuthService) {}

  // Recupera l'utente loggato dal servizio AuthService
  ngOnInit(): void {
      this.userLogged = this.auth.getUser()
  }

}
