import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { EventListener } from '@angular/core/src/debug/debug_node';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

 // 3. Crear la propiedad titulo para obtenrla en en le HTML
  titulo: string;

  constructor(  private router : Router, 
                private title: Title,
                private meta: Meta 
                ){

    //this.router.events.pipe(
      // 1. Operadores para extraer la data o información  
      //1.  del router.events desde pages.routes.ts 
      
      //1.  filtrar toda la información que se puede obtener 
      // filter( evento => evento instanceof ActivationEnd ),
      //1.  definir el tipo especifico  de dato que queremos el titulo
      //filter( (evento: ActivationEnd ) => evento.snapshot.firstChild === null) ,
      //1. extraer solo  el titulo de snapshot (ver console.log)
     // map( (evento: ActivationEnd) => evento.snapshot.data )  )

   this.getDataRouter()
    .subscribe( data => {
      //console.log(data)
      // 3. enviar el titulo
      this.titulo = data.titulo;
      // Cargar la tag title
      this.title.setTitle( this.titulo )
      // 4. Construir los metatags
      const metatag: MetaDefinition = {
        name: 'description',
        content: this.titulo

      };

      // enviar al html el meta
      this.meta.updateTag( metatag )


    });

    /* 1. subscribe( event => {
      console.log(event)
    }); */



   }

  ngOnInit() {
  }

  // 2. Función para resumir los pasos 1 y RETORNAR un observable usando Pipe
  getDataRouter () {

    return this.router.events.pipe(
 
    filter( evento => evento instanceof ActivationEnd ),
    filter( (evento: ActivationEnd ) => evento.snapshot.firstChild === null) ,
    map( (evento: ActivationEnd) => evento.snapshot.data )

    )


  }


}

// pages.routes.ts
