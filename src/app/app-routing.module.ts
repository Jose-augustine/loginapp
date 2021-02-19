import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'', component: LoginComponent},
  {path:'navbar', component: NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
