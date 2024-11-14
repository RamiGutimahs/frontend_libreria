import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';
import {AppMainComponent} from '../app.main/app.main.component';
import {AppMenuitemComponent} from './app.menuitem.component';
import {CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';
import { LibrosComponent } from '../../component/libros/libros-list/libros.component';
import { LibreriaListComponent } from '../../component/librerias/libreria-list/libreria-list.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [AppComponent, AppMenuitemComponent, CommonModule],
  templateUrl: './app.menu.component.html',
  styleUrl: './app.menu.component.scss'
})
export class AppMenuComponent  implements OnInit{

  model: any[] | undefined;

  constructor(public app: AppComponent, public appMain: AppMainComponent) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Inteligencia de Negocio(BI)', icon: 'pi pi-fw pi-home',
        items: [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']}
        ]
      },
      {
        label:'General', icon: 'pi pi-fw pi-star',badge:3,
        items:[

          {label: 'Sucursal', icon:'pi pi-fw pi-clone', routerLink:['libreria']},
          {label: 'Lista de libros', icon:'pi pi-fw pi-list',routerLink:['libro']}
        ]
      },
      {
        label: 'Start', icon: 'pi pi-fw pi-download',
        items:[
          {label:'Carrito', icon:'pi pi-fw pi-shopping-cart'}
        ]
      },

    ];
  }
  onMenuClick() {
    this.appMain.menuClick = true;
  }
}
