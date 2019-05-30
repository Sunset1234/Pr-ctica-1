import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Models/usuario';
import {UsuariosService} from '../Servicios/usuarios.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public user:Usuario;

  constructor(private _usuarioservice:UsuariosService) { 
    this.user = new Usuario('','','','','','','',);
  }

  enviar(miform){
    this._usuarioservice.setUsuario(this.user);
    miform.reset(); 
  }

  ngOnInit() {
  }
}
