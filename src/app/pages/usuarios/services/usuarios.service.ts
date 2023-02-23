import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApi } from '../interfaces/usuario-interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUsuarios:string='https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  buscarXNombre(termino:string): Observable<UserApi[]>{
    const url=`${this.apiUsuarios}/users/?name_like=${termino}`;
    return this.http.get<UserApi[]>(url);
  }

  ListarTodo(): Observable<UserApi[]>{
    const url=`${this.apiUsuarios}/users`;
    return this.http.get<UserApi[]>(url);
  }
  
  OrdenarPor(campo:string, orden:boolean, termino:string=''): Observable<UserApi[]>{   
    const url=`${this.apiUsuarios}/users/?${(termino?'name_like='+termino+'&':'')}_sort=${campo}${(orden?'&_order=desc':'&_order=asc')}`;
    return this.http.get<UserApi[]>(url);
  }
  
}
