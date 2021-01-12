import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CarteleraResponse} from '../interfaces/cartelera_response';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient ) { }

  getCartelera(): Observable<CarteleraResponse> {
    return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=4ba0276cb3df1f1269aae1b6ef5b7e87&language=es-ES&page=1');
  }
}
