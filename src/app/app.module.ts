import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitDisplayComponent } from './git-display/git-display.component';
import { GitFormComponent } from './git-form/git-form.component';
import { GitHttpComponent } from './git-http/git-http.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { signupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GitDisplayComponent,
    GitFormComponent,
    GitHttpComponent,
    LandingPageComponent,
    NavbarComponent,
    signupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
