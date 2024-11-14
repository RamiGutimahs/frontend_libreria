import { Routes } from '@angular/router';
import {AppMainComponent} from './layout/app.main/app.main.component';
import { LibrosComponent } from './component/libros/libros-list/libros.component';
import { LibreriaListComponent } from './component/librerias/libreria-list/libreria-list.component';

export const routes: Routes = [
  {
    path: '', 
    component: AppMainComponent,
    children:[
      {
        path:'libreria', component:LibreriaListComponent,
      },
      {
        path:'libro', component:LibrosComponent,
      }
    ]
  },



];
