import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomepageComponent } from './pages/homepage/homepage/homepage.component';  
import { ProfileComponent } from './pages/profile/profile.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },  
  { path: 'login', component: LoginComponent },  
  { path: 'register', component: RegisterComponent },  
  { path: 'homepage', component: HomepageComponent },  
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },  
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'post-list', component: PostListComponent, canActivate: [AuthGuard]  },

  // Redirect se la rotta non è trovata
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
