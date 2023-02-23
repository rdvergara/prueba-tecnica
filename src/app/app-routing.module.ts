import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./pages/page.module').then(m=>m.PageModule)
  },
  {
    path:'home',
    loadChildren:()=>import('./pages/page.module').then(m=>m.PageModule)
  },
  {
    path:'usuarios',
    loadChildren:()=>import('./pages/page.module').then(m=>m.PageModule)
  },
  {
    path:'**',
    loadChildren:()=>import('./pages/page.module').then(m=>m.PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
