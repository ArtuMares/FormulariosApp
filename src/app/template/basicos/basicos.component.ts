import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild("miFormulario") miFormulario!:NgForm;  //se busca un elemento del html con la referencia miFormulario

  constructor() { }

  ngOnInit(): void {
  }
  guardar(){
    this.miFormulario
  }
  nombreValido():boolean{
  return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched
}
precioValido():boolean{
  return this.miFormulario?.controls.precio?.invalid && this.miFormulario?.controls.precio?.touched && this.miFormulario.controls.precio?.value <0;
}
}
