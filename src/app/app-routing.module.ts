import { AuthGuard } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { AddRecipePageComponent } from './add-recipe-page/add-recipe-page.component';
import { ListsPageComponent } from './lists-page/lists-page.component';

const routes : Routes = [
  {path: '', redirectTo: '/landing-page', pathMatch: 'full'},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recipes-page', component: RecipesPageComponent, canActivate: [AuthGuard]},
  {path: 'add-recipe-page', component: AddRecipePageComponent, canActivate: [AuthGuard]},
  {path: 'lists-page', component: ListsPageComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
 
export class AppRoutingModule { }
