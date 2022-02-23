import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// import { emailPattern, nombreApellidoPattern, noPuedeSerArtuter } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  
  //Mover este metodo

  miFormulario:FormGroup= this.fb.group({
    nombre:["", [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email:["", [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    username:["", [Validators.required, this.vs.noPuedeSerArtuter]],
    password:["", [Validators.required, Validators.minLength(6) ]],
    password2:["", [Validators.required, ]],
  },{
    validators: [this.vs.camposIguales('password','password2')]
  })

  get emailErrorMsg():string{
    const errors= this.miFormulario.get("email")?.errors;
    if(errors?.required){
      return "Email es obligatorio"
    } else
    if(errors?.pattern){
      return "Email no cumple con el formato válido"
    } else
    if(errors?.emailTomado){
      return "El email ya está siendo utilizado"
    }else
    return ""
  }

  constructor(private fb:FormBuilder, private vs:ValidatorService, private emailValidator:EmailValidatorService) {
    
  }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: "Arturo Mares",
      email: "test1@test.com",
      username: "RedCaguamo",
      password: "123456",
      password2: "123456"
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }
  emailRequired(){
    return this.miFormulario.get("email")?.errors?.required && this.miFormulario.get("email")?.touched;
  }
  emailPattern(){
      return this.miFormulario.get("email")?.errors?.pattern && this.miFormulario.get("email")?.touched;
  }
  emailTomado(){
      return this.miFormulario.get("email")?.errors?.emailTomado && this.miFormulario.get("email")?.touched;
  }

  submitForm(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
