import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurante } from './restaurante/restaurante.model';
import {ErrorHandler} from '../app.error-handler';

import {MEAT_API} from '../app.api';
import { MenuItem } from 'app/restaurante-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantesService {

    constructor(private http: Http) { }

    restaurantes(): Observable<Restaurante[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handlerError);

    };

    restauranteById(id: string): Observable<Restaurante> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError);
    }

    reviewsOfRestaurante(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError);
    }

    menuOfRestaurante(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError);
    }
}
