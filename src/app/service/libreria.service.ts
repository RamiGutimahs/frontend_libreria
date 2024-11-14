import { Injectable } from '@angular/core';
import {GraphQLService} from './graph-ql.service';
import {Observable} from 'rxjs';
import {ApolloQueryResult} from '@apollo/client';
import {MutationResult} from 'apollo-angular';
import { LibreriaModel } from '../model/libreria/libreria.model';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {

  constructor(private graphqlService: GraphQLService) { }

  getLibrerias(): Observable<ApolloQueryResult<LibreriaModel>> {
    const query = `
      query {
        obtenerLibrerias {
          id
          nombre
          ubicacion
        }
      }
    `;
    return this.graphqlService.query<LibreriaModel>(query);
  }

  // Mutación para registrar un nuevo libreria
  registrarLibreria(nombre: string, ubicacion: string): Observable<MutationResult<LibreriaModel>> {
    const mutation = `
      mutation($nombre: String!, $ubicacion: String!) {
        agregarLibreria(nombre: $nombre, ubicacion: $ubicacion) {
          id
          nombre
          ubicacion
        }
      }
    `;
    return this.graphqlService.mutate<LibreriaModel>(mutation, { nombre, ubicacion });
  }
}
