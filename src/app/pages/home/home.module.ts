import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FechaPipe } from './pipes/fecha.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    FechaPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }