import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CrearComponent } from './crear/crear.component';

const routes: Routes =[
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'crea', component: CrearComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Ruta raíz redirige a 'home'
  { path: '**', redirectTo: 'home', pathMatch: 'full' } // Rutas no encontradas redirigen a 'home'
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })  
  export class AppRoutingModule { }