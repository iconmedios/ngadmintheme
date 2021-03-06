import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;

  imagenSubir: File;
  imagenTemp: any;

  constructor( public _usuarioService: UsuarioService ) {
    this.usuario = this._usuarioService.usuario;
   }

  ngOnInit() {
  }

  guardar ( usuario: Usuario){
    this.usuario.nombre = usuario.nombre;
    if( !this.usuario.google ){
      this.usuario.email = usuario.email;
    }
    this._usuarioService.actualizarUsuario( this.usuario )
          .subscribe();

          // .subscribe( resp =>{
          //   console.log( resp)
          // });
    }

      // v174 aadv seleccionar imagen a subir
    seleccionImagen( archivo: File ){
      // console.log( event )
      if ( !archivo ) {
        this.imagenSubir = null;
        return;
      }
      if (archivo.type.indexOf ('image') < 0){
          Swal.fire({ type: 'error', title: 'Error de imagen!', text: 'El archivo debe ser una imagen!', animation: false });
          this.imagenSubir = null;
          return;
      }
      this.imagenSubir = archivo;

      // v175 aadv estable imagen de previzualización

      let reader = new FileReader();
      let urlImagenTemp = reader.readAsDataURL( archivo );
      //reader.onloadend = () => { console.log( reader.result) }
      reader.onloadend = () => this.imagenTemp = reader.result;


    }

    cambiarImagen(){
      this._usuarioService.cambiarImagen( this.imagenSubir, this.usuario._id );
    }


}
