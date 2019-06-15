import { Component, OnInit } from '@angular/core';

// funcion para iniciar assets/js/custom.min.js desde dentro
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    init_plugins();
  }

}
