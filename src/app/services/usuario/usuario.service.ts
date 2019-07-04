import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';

import Swal from 'sweetalert2'
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';



@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;


  constructor( 
    public http: HttpClient,
    public router: Router,
    public _subirArchivoService: SubirArchivoService
     ) { 
  
    //console.log('Servicio de usuario listo');
    this.cargarStorage();
  }

  estaLogueado() {

         return ( this.token.length > 5 )? true : false;

  }


  cargarStorage(){

    if( localStorage.getItem('token') ){
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse (localStorage.getItem('usuario'));

    }else{
      this.token = '';
      this.usuario = null;
    }

  }


  guardarStorage (id: string, token: string, usuario: Usuario){

        localStorage.setItem('id', id);
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify (usuario));

        this.usuario = usuario;
        this.token = token;

  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }

  loginGoogle ( token: string ){

    let url = URL_SERVICIOS + '/login/google';

    return this.http.post( url, { token }).pipe(
      map ( (resp: any )=> {
        this.guardarStorage( resp.id, resp.token, resp.usuario );
        return true;
      })
    );

  }


  login( usuario: Usuario, recordar: boolean = false){

    if ( recordar ){
      localStorage.setItem('email', usuario.email)
    }else{
      localStorage.removeItem ('email')
    }

    let url = URL_SERVICIOS + '/login';
    return this.http.post (url, usuario )
    .pipe( map ( (resp: any )=> {


      this.guardarStorage( resp.id, resp.token, resp.usuario );
        // guardar en el local storage v157
        // localStorage.setItem('id', resp.id);
        // localStorage.setItem('token', resp.token);
        // localStorage.setItem('usuario', JSON.stringify (resp.usuario));
        return true;
    
      }))
    }


crearUsuario( usuario: Usuario ){
   
    
    let url = URL_SERVICIOS + '/usuario';

    return this.http
    .post( url, usuario ).pipe(

      map ( (resp: any )=> {

        Swal.fire({
          title: 'Usuario creado!',
          text: usuario.email,
        
          animation: false
        })

      return resp.usuario;
      })
    )
   
  }
  // v171 aadv
  actualizarUsuario( usuario: Usuario ){

    let url = URL_SERVICIOS + '/usuario/' + usuario._id;
    url += '?token=' + this.token;
    // console.log( url);
    return this.http.put( url, usuario ).pipe(

      map ( (resp: any )=> {

        let usuarioDB: Usuario = resp.usuario;
        this.guardarStorage( usuarioDB._id, this.token, usuarioDB   )
        Swal.fire({
          title: 'Usuario actualizado!',
          text: usuario.nombre,
          type: 'success',
          animation: false
        });

        return true;
      })
    );
   
   
  
  }
    // v174 se publico 
    cambiarImagen( archivo: File, id: string ){
      this._subirArchivoService.subirArchivo( archivo, 'usuarios', id)
      .then( (resp:any ) =>{
        this.usuario.img = resp.usuario.img;
        Swal.fire({
          title: 'Imagen actualizada!',
          text: this.usuario.nombre,
          type: 'success',
          animation: false
        });
        // actualizar storage
        this.guardarStorage(id, this.token, this.usuario );
        
        //console.log( resp );
      })
      .catch( resp =>{
        console.log( resp );
      });
    }
}



