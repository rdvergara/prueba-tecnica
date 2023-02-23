import { NgModule } from '@angular/core';
import { PageRoutingModule } from './page-routing.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { HomeModule } from './home/home.module';


@NgModule({
    declarations:[
    ], 
    imports:[PageRoutingModule],
    exports:[UsuariosModule, HomeModule]
})
export class PageModule{}