// LIBRERIAS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
//COMPONENTES
import { AvisosFormComponent } from './avisos-form/avisos-form.component'
import { LoginComponent} from './login/login.component'
import { NavbarComponent } from './navbar/navbar.component';
const routes: Routes = [ 
  
  {path:'login',component:LoginComponent},
  {path:'avisos-form',component:AvisosFormComponent},
  {path:'navbar',component:NavbarComponent}
];
// LoginComponent
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
