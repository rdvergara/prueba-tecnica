import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';
import { UserApi } from './interfaces/usuario-interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {

  hayError:boolean=false;
  termino:string='';
  usuarios: UserApi[]=[];

  bOrden:boolean=false;
  

  constructor(private usuariosService: UsuariosService) { 
    this.listarTodo();
  }

  ngOnInit(): void {
  }

  OrdenarPor(campo:string, orden:boolean){
    this.usuariosService.OrdenarPor(campo, orden, this.termino)
    .subscribe({
        next:(usuarios)=>{
          if(usuarios.length<=0)
            this.hayError=true;
          
          this.usuarios=usuarios;
        },
        error:(err)=>{
          this.hayError=true;
          this.usuarios=[];
        }
    });    
  }

  buscarXNombre(){
    this.hayError=false;
    if(this.termino.length<=0){
      this.listarTodo();
      return;
    }
    
    
    this.usuariosService.buscarXNombre(this.termino)
    .subscribe({
        next:(usuarios)=>{
          if(usuarios.length<=0)
            this.hayError=true;
          
          this.usuarios=usuarios;
        },
        error:(err)=>{
          this.hayError=true;
          this.usuarios=[];
        }
    });
      
      
  }

  listarTodo(){
    this.usuariosService.ListarTodo()
    .subscribe({
        next:(usuarios)=>{
          if(usuarios.length<=0)
            this.hayError=true;
          
          this.usuarios=usuarios;
        },
        error:(err)=>{
          this.hayError=true;
          this.usuarios=[];
        }
    });
  }

}
