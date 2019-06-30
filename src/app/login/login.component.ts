import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { element } from 'protractor';


// funcion para iniciar assets/js/custom.min.js desde dentro
declare function init_plugins();
declare const gapi:  any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email: String;
    recuerdame: boolean = false;

    auth2: any;

  // navegar mediante router
  constructor( 
    public router: Router,
    public _usuarioService: UsuarioService ) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';
    if ( this.email.length > 1){
      this.recuerdame = true;
    }
  }

  googleInit(){

    gapi.load('auth2', ()=> {

      this.auth2 = gapi.auth2.init({

        client_id: '822861854663-n90jm7kj23k604ndbt2g6orsf6cmk8k9.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'


      });

      // lanzamos la funcion attachSingin
      this.attachSingin( document.getElementById('btnGoogle'));

    });

  }

  attachSingin( element ){

      this.auth2.attachClickHandler( element, {}, googleUser =>{

        // obtener profile: let profile = googleUser.getBasicProfile();
        // console.log( profile );
        let token = googleUser.getAuthResponse().id_token;

        this._usuarioService.loginGoogle( token )
        .subscribe( () => this.router.navigate(['/dashboard']) );

      });

  }


  //declarar la funcion ingresar
   ingresar( forma: NgForm){

    if ( forma.invalid ){
      return;
    }

    let usuario = new Usuario( null, forma.value.email, forma.value.password );
    this._usuarioService.login(  usuario, forma.value.recuerdame )
    .subscribe( correcto => this.router.navigate(['/dashboard']) );


     
    
      //  this.router.navigate([ '/dashboard'])
   }

}
