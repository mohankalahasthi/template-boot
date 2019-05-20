import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { GenericsComponent } from './generics/generics.component';
import { ElementsComponent } from './elements/elements.component';
const routes: Routes = [
  { path : "", component: HomeComponent},
  { path : "home", component: HomeComponent},
  { path : "generics", component: GenericsComponent},
  { path : "elements", component: ElementsComponent},
  { path : "signup", component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
