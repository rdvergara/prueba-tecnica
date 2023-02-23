import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'usuarios',
        component:UsuariosComponent
      },
      {
        path:'**',
        redirectTo:'home'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PageRoutingModule { }
