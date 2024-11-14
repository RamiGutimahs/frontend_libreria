import { Component } from '@angular/core';
import { LibreriaModel } from '../../../model/libreria/libreria.model';
import { LibreriaService } from '../../../service/libreria.service';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-libreria-list',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, DialogModule, InputTextModule, FormsModule],
  templateUrl: './libreria-list.component.html',
  styleUrl: './libreria-list.component.scss'
})
export class LibreriaListComponent {
  librerias: LibreriaModel[] = [];
  displayModal: boolean = false;

  // Formulario para nuevo condominio
  newLibreria = {
    nombre: '',
    ubicacion: ''
  };

  constructor(private libreriaService: LibreriaService) {
    this.loadLibrerias();
  }

  loadLibrerias() {
    this.libreriaService.getLibrerias().subscribe((result: any) => {
      console.log(result.data.librerias)
      this.librerias = result.data.obtenerLibrerias;
    });
  }

  openNewLibreriaModal() {
    this.displayModal = true;
  }

  saveLibreria() {
    this.libreriaService
      .registrarLibreria(this.newLibreria.nombre, this.newLibreria.ubicacion)
      .subscribe((result: any) => {
        console.log()
        this.librerias = [...this.librerias, result.data.agregarLibreria];  // Crear un nuevo array con el nuevo condominio

        this.displayModal = false;
        this.newLibreria = { nombre: '', ubicacion: '' };  // Resetear el formulario
      });
  }
}
