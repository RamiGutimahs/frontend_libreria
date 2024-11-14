import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LibroModel } from '../../../model/libros/libros.model';
import { LibroService } from '../../../service/libro.service';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, DialogModule, InputTextModule, FormsModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.scss'
})
export class LibrosComponent {
  libros: LibroModel[] = [    
  ];
  displayModal: boolean = false;

  displayImageModal: boolean = false; // Para mostrar el modal de la imagen
  selectedImage: string = ''; // URL de la imagen seleccionada

  openImageModal(image: string): void {
    this.selectedImage = image;
    this.displayImageModal = true; // Muestra el modal con la imagen ampliada
  }



  // Formulario para nuevo condominio
  newLibro = {
    titulo:'',
    autor:'',
    editorial:'',
    genero:'',
    precioVenta:0,
    stock:0,
    descripcion:'',
    imagen:'',

  };

  constructor(private libroService: LibroService) {
    this.loadLibros();
  }

  loadLibros() {
    this.libroService.getLibros().subscribe((result: any) => {
      this.libros = result.data.obtenerLibros;
    });
  }

  openNewLibroModal() {
    this.displayModal = true;
  }

  
  saveLibro() {
    this.libroService
      .registrarLibro(this.newLibro.titulo, this.newLibro.autor, this.newLibro.editorial, this.newLibro.genero,this.newLibro.precioVenta,this.newLibro.stock,this.newLibro.descripcion,this.newLibro.imagen)
      .subscribe((result: any) => {
        console.log(result.data.agregarLibro)
        this.libros = [...this.libros, result.data.agregarLibro];  // Crear un nuevo array con el nuevo condominio

        this.displayModal = false;
        this.newLibro = {     
          titulo:'',
          autor:'',
          editorial:'',
          genero:'',
          precioVenta:0,
          stock:0,
          descripcion:'',
          imagen:'' };  // Resetear el formulario
      });
  }

  

}