import { AuthGuard } from './services/auth-guard.service';
import { NavFooterService } from './nav-footer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { ListsPageComponent } from './lists-page/lists-page.component';
import { AddRecipePageComponent } from './add-recipe-page/add-recipe-page.component';

import { AppRoutingModule } from './/app-routing.module';

import { AuthService } from './services/auth.service';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth  } from 'angularfire2/auth';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LandingPageComponent,
    RecipesPageComponent,
    ListsPageComponent,
    AddRecipePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, NavFooterService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
