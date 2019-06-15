import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  // importar el sidebar de sidebar.services
  constructor( public _sidebar: SidebarService) { }

  ngOnInit() {
  }

}
