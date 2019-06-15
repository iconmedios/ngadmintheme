import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementa',
  templateUrl: './incrementa.component.html'

})
export class IncrementaComponent implements OnInit {

 @ViewChild('txtProgress') txtProgress: ElementRef;
 @Input('nombre') leyenda: string = 'Leyenda';
 @Input() progreso: number = 50;
 @Output ('actualizaValor') cambiaValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
    // console.log('Leyenda', this.leyenda);
    
  }

  ngOnInit() {
    // console.log('progeso', this.progreso);
  }

  alCambiar ( newValue: number){
    
    //let elemHTML: any = document.getElementsByName ('progreso')[0];
   

    if( newValue >= 100){
      this.progreso = 100;

    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue  
    }
   
    //elemHTML.value = (this.progreso);
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambiaValor.emit ( this.progreso );
  }

  cambiarValor( valor: number ){

    if( this.progreso >= 100 && valor > 0){
      this.progreso = 100;
      return;
    } 
    if( this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambiaValor.emit ( this.progreso );

    this.txtProgress.nativeElement.focus();
  }


}
