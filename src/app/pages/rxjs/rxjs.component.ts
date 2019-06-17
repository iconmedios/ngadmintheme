import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {


  // Referencia al onDrestroy

    subscription: Subscription;

  constructor() { 

    

    this.subscription = this.regresaObservable()
    .subscribe(
      numero =>  console.log('Subs', numero ),
      error => console.log('Error en el obs', error),
      () => console.log('Termino el observable')
   
    );

  }

 

  ngOnInit() {
  }

  ngOnDestroy(){
    // cancelar la subscription o la funcion al salir de la pagina
    console.log('Se abandonó la pagina');
    this.subscription.unsubscribe();


  }

  // cuerpo de la funcion
  regresaObservable(): Observable<any> {

   return new Observable( (observer: Subscriber<any>)  => {

    let contador = 0;
          
      const intervalo = setInterval ( ()=>{
 
        contador++ ;

       const salida = {
          valor: contador
       };

        observer.next( salida );

        
        
        // limitar respuestas
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete( );
        // }
        // if (contador === 4) {
        //   clearInterval(intervalo);
        //   observer.error('Auxilio')
        // }

      }, 1000 );

    }).pipe(
      // map( resp => {
      //   return resp.valor + 1;
      // }) funcion resumida =

      map( resp => resp.valor + 1),
      filter( (valor, index) => {
        //console.log('Filter', valor, index);
        //return true;

        if ((valor % 2) === 1) {
          // impar
          return true;
        } else {
          // par 
          return false;
        }
      })
    );




  } 

}
