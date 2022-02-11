import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  
  miFormulario:FormGroup = this.fb.group({
    nombre: [, [Validators.minLength(3), Validators.required]],
    favoritos:this.fb.array([
      ["Fallout", Validators.required],
      ["Dark Souls", Validators.required],
    ],Validators.required  )
  })

  nuevoFavorito: FormControl = this.fb.control("",Validators.required);

  get favoritosArr(){
    return this.miFormulario.get("favoritos") as FormArray;
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  esValido(control:string){
    return this.miFormulario.controls[control].errors && this.miFormulario.controls[control].touched;
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return
    }
    // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }
  borrar(index:number){
    this.favoritosArr.removeAt(index);
  }

  guardar(){
    
    console.log(this.miFormulario.value);
  }

}
