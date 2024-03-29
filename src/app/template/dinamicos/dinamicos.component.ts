import { Component, OnInit } from '@angular/core';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';

interface Persona{
  nombre: string;
  favoritos:Favorito[] 
}

interface Favorito{
 id:number;
 nombre:string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  nuevoJuego:string="";
  a:number=0;
  persona:Persona={
    nombre: "Arturo",
    favoritos: [{
      id:1, nombre: "Fallout"
    },{
      id:2, nombre: "Dark Souls"
    }]
  }

  guardar(){
    console.log("formulario posteado")
  }
  eliminar(index:number){
    this.persona.favoritos.splice(index, 1);
  }
  agregar(){
    const nuevoFavorito: Favorito ={
      id: this.persona.favoritos.length+1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego="";
  }
} 
