import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule  } from "@angular/common/http";

//paso1 cambiar idioma
  import  '@angular/common/locales/global/es-cl' ; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-CL'} //paso2 cambiar idioma
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
