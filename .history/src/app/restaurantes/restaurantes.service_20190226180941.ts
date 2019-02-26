
import { HttpClient, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurante } from './restaurante/restaurante.model';

import {MEAT_API} from '../app.api';
import { MenuItem } from 'app/restaurante-detail/menu-item/menu-item.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestaurantesService {

    constructor(private http: HttpClient) { }

    restaurantes(search?: string): Observable<Restaurante[]> {
        /*let params: HttpParams = undefined;
        if (search !== null) {
            params = new HttpParams().set('q', search);
        }
        return this.http.get<Restaurante[]>(`${MEAT_API}/restaurants`, {params: params});*/
        return this.http.get<Restaurante[]>(`${MEAT_API}/restaurants`);
    };

    restauranteById(id: string): Observable<Restaurante> {
        return this.http.get<Restaurante>(`${MEAT_API}/restaurants/${id}`);
    }

    reviewsOfRestaurante(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);
    }

    menuOfRestaurante(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
    }
}
