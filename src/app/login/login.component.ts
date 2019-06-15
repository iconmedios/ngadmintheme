import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// funcion para iniciar assets/js/custom.min.js desde dentro
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // navegar mediante router
  constructor( public router: Router) { }

  ngOnInit() {
    init_plugins();
  }

  //declarar la funcion ingresar
   ingresar(){
       this.router.navigate([ '/dashboard'])
   }

}
