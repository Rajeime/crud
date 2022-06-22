import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; //import created components\/
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';
import { OrderCompletedComponent } from './order-completed/order-completed.component';

//Routing Setup -----------------------------------------
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default that redirects and empty path to home component
  { path: 'home', component: HomeComponent }, //path to 'home' (these are names, NOT routes)
  { path: 'about', component: AboutComponent }, //path to 'about'
  { path: 'details/:id', component: DetailsComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'order-completed', component: OrderCompletedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
