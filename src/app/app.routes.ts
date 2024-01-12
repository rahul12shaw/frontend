import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './components/error/error.component';
import { CourseComponent } from './components/courses/course/course.component';
// import { authenticationGuard } from './authentication.guard';
// import { courseGuard } from './course.guard';
// import { contactGuard } from './contact.guard';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent, canDeactivate: [] }, //contactguard
  { path: 'courses', component: CoursesComponent, canActivate: [authGuard]},//authenticationGuard]},
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'courses/course/:id', component: CourseComponent },
  { path: 'courses', canActivateChild : [],  children : [ //Courseguard
    {path: 'course/:id', component: CourseComponent},
  ] },
  { path: '**', component: ErrorComponent },
];

