import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Models/usuario';
import {UsuariosService} from '../Servicios/usuarios.service';
import { Subscription }   from 'rxjs';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

 

  usuarios: Array<Usuario>;
  public new:Usuario;

  constructor(private _usuarioservice:UsuariosService) {
    this.usuarios=new Array<Usuario>();

    _usuarioservice.enviarusersSubject$.subscribe(usuario=> {
      this.usuarios.push(new Usuario(usuario.emoji,usuario.nombre,usuario.apaterno,usuario.amaterno,usuario.sexo,usuario.edad,usuario.correo));
    } );
   }

  ngOnInit() {

  }
}
