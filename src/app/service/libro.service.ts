import { Injectable } from '@angular/core';
import {GraphQLService} from './graph-ql.service';
import {Observable} from 'rxjs';
import {ApolloQueryResult} from '@apollo/client';
import {MutationResult} from 'apollo-angular';
import { LibroModel } from '../model/libros/libros.model';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private graphqlService: GraphQLService) { }

  getLibros(): Observable<ApolloQueryResult<LibroModel>> {
    const query = `
      query {
        obtenerLibros {

        titulo
        autor
        editorial
        genero
        precioVenta
        stock
        descripcion
        imagen

        }
      }
    `;
    return this.graphqlService.query<LibroModel>(query);
  }

  // Mutación para registrar un nuevo libreria
  registrarLibro(titulo: String, autor: String, editorial: String, genero: String, precioVenta: number, stock: number, descripcion: String, imagen: String): Observable<MutationResult<LibroModel>> {
    const mutation = `
      mutation($titulo: String!, $autor: String!, $editorial: String!, $genero: String!, $precioVenta: Float!, $stock: Int!, $descripcion: String!, $imagen: String!) {
        agregarLibro(titulo: $titulo, autor: $autor, editorial: $editorial, genero: $genero, precioVenta: $precioVenta, stock: $stock, descripcion: $descripcion, imagen: $imagen) {
        
        titulo
        autor
        editorial
        genero
        precioVenta
        stock
        descripcion
        imagen

        }
      }
    `;
    return this.graphqlService.mutate<LibroModel>(mutation, {titulo, autor, editorial, genero, precioVenta, stock, descripcion, imagen});
  }
}
