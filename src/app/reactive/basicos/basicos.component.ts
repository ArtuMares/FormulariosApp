import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  implements OnInit{

  constructor(private fb:FormBuilder){

  }
  ngOnInit(){
    this.miFormulario.reset({
      nombre: "RTX",
      precio:20000,
      existencias: 10
    })
  }

  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }
  // miFormulario:FormGroup = new FormGroup({
  //   "nombre": new FormControl("RTX"),
  //   "precio": new FormControl("20000"),
  //   "existencias": new FormControl("3"),
  // });

  miFormulario:FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.min(0), Validators.required]],
    existencias: [, [Validators.min(0), Validators.required]],
  })
  
  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
      console.log(this.miFormulario.value);
      this.miFormulario.reset();
  }

}
