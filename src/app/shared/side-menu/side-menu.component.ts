import { Component, OnInit } from '@angular/core';
import { TemplateModule } from '../../template/template.module';

interface MenuItem {
  texto: string,
  ruta: string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [`
  li{
    cursor: pointer;
  }
  `
  ]
})
export class SideMenuComponent {

  templateMenu: MenuItem[] = [{
    texto: "Básicos",
    ruta: "./template/basicos"
  },
  {
    texto: "Dinámicos",
    ruta: "./template/dinamicos"
  },
  {
    texto: "Switches",
    ruta: "./template/switches"
  },
  ];

  reactiveMenu: MenuItem[] = [{
    texto: "Básicos",
    ruta: "./reactive/basicos"
  },
  {
    texto: "Dinámicos",
    ruta: "./reactive/dinamicos"
  },
  {
    texto: "Switches",
    ruta: "./reactive/switches"
  },
  ];
  authMenu: MenuItem[] = [
    {
      texto: "Registro",
      ruta: "./auth/registro"
    },
    {
      texto: "Login",
      ruta: "./auth/login"
    }
  ];

}
