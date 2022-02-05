import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "template",
    loadChildren: () => import("./template/template.module").then(m=> m.TemplateModule) //lazyload del módulo de template
  },
  {
    path: "reactive",
    loadChildren: () => import("./reactive/reactive.module").then(m=>m.ReactiveModule) //lazyload del módulo de reactive
  },
  {
    path:"**",
    redirectTo: "template"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //forroot solo en las rutas principales, forchild en todas las rutas hijas
  exports: [RouterModule]
})
export class AppRoutingModule { }
