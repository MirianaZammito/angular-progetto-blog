import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomepageComponent } from './pages/homepage/homepage/homepage.component';  // Aggiunto componente Homepage
import { ProfileComponent } from './pages/profile/profile.component';
import { PostListComponent } from './components/post/post-list/post-list.component';

// import { CartBadgeComponent } from './components/cart-badge/cart-badge.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },  
  { path: 'login', component: LoginComponent },  
  { path: 'register', component: RegisterComponent },  
  { path: 'homepage', component: HomepageComponent }, 
  // { path: 'cart', component: CartBadgeComponent }, 
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },  
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

  { path: 'post-list', component: PostListComponent, canActivate: [AuthGuard]  },

  { path: '**', redirectTo: '/homepage' },  // Redirect se la rotta non è trovata
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
