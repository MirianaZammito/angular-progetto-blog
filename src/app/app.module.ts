import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';



import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardHeaderComponent } from './components/dashboard/dashboard-header/dashboard-header.component';
import { DashboardContentComponent } from './components/dashboard/dashboard-content/dashboard-content.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomepageComponent } from './pages/homepage/homepage/homepage.component';

import { CartService } from './services/cart.service';
import { HeroSectionComponent } from './components/homepage/hero-section/hero-section.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileHeaderComponent } from './components/profile/profile-header/profile-header.component';

import { PostListComponent } from './components/post/post-list/post-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PostEditButtonComponent } from './components/post/post-edit-button/post-edit-button.component';
import { PostDeleteButtonComponent } from './components/post/post-delete-button/post-delete-button.component';
import { PostUpsertModalComponent } from './components/post/post-upsert-modal/post-upsert-modal.component';
import { PostAddButtonComponent } from './components/post/post-add-button/post-add-button.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardContentComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,


    HeroSectionComponent,
    ProfileComponent,
    ProfileHeaderComponent,
    PostListComponent,
    PostEditButtonComponent,
    PostDeleteButtonComponent,
    PostUpsertModalComponent,
    PostAddButtonComponent,



  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule, 
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
