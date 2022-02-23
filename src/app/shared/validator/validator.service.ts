import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  nombreApellidoPattern: string = "([a-zA-Z]+) ([a-zA-Z]+)";
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor() { }
  noPuedeSerArtuter(control: FormControl):ValidationErrors| null {
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === "artuter") {
      return {
        noArtuter: true
      }
    }
    return null;
  }

  camposIguales(campo1:string, campo2:string){
    return(formGroup:AbstractControl):ValidationErrors|null =>{
      console.log(formGroup);
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;
      if(pass1!==pass2){
        formGroup.get(campo2)?.setErrors({noIguales:true});
        return {noIguales:true}  //true cuando hay un error
      }
      formGroup.get(campo2)?.setErrors(null);
      return null; //null cuando no hay error
    }
  }
}

