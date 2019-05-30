import { Injectable } from '@angular/core';
import { Usuario } from '../Models/usuario';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private enviarusersSubject = new Subject<Usuario>();
  enviarusersSubject$ = this.enviarusersSubject.asObservable(); 

  constructor() {}

  setUsuario(nuevo){
    this.enviarusersSubject.next(nuevo);
  }  
}
