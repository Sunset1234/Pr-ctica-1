import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PracticaComponent } from './practica/practica.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'practica',component:PracticaComponent},

  {path:'practica/:nombre',component:PracticaComponent},

  //ruta para las que no existen

  {path:'**',component:AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
