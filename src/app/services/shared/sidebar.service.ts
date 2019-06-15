import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  // una arreglo de objetos para el menu lateral
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu :[
        {titulo: 'Dashboard', url: '/dashboard'},
        {titulo: 'Barra de progreso', url: '/progress'},
        {titulo: 'Graficas', url: '/graficas1'},
       

  
  
      ]
    }
    ];

  constructor() { }
}
