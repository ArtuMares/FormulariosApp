import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit  {


  constructor(private fb:FormBuilder) { }
  miFormulario:FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [true, Validators.requiredTrue],
  });
  ngOnInit(){
      this.miFormulario.reset({
        ...this.persona,
        condiciones: true
      });

      this.miFormulario.valueChanges.subscribe(({condiciones, ...resto})=>{ //se extrae condiciones separado de los demás campos que son género y notificaciones
        this.persona = resto;
      })

  }
  persona={
    genero:"F",
    notificaciones: true
  }

  guardar(){
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;

     this.persona= formValue; 
  }
}
