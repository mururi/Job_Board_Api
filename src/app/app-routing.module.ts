import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { signupComponent } from './signup/signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: signupComponent},
  { path: '', redirectTo:"/landing-page", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
