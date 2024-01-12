import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AboutComponent } from './components/about/about.component';
import { AuthServService } from './services/auth-serv.service';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    ContactComponent,
    CoursesComponent,
    AboutComponent,
    RouterModule,
    RegistrationComponent,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-routing-demo';

  // constructor(private authService: AuthServService) {}


  //   constructor(private router: Router,) {
   
  //  }
// constructor(){
// localStorage.setItem("isloggedIn","false");
// }
  // redirectToLogin() {
  //   this.router.navigate(['/login']); // Redirects to the login route
  //  }
  // loginFn() {
  //   this.authService.login();
  // }

  // logoutFn() {
  //   this.authService.logout();
  // }
 
}

