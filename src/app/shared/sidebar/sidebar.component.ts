import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  //v196
  usuario: Usuario;

  // importar el sidebar de sidebar.services
  constructor( public _sidebar: SidebarService,
    public _usuarioService: UsuarioService
    ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
  }

}
