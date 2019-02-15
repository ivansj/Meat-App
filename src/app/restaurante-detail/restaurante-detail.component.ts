import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantesService } from  '../restaurantes/restaurantes.service';

import { Restaurante } from '../restaurantes/restaurante/restaurante.model';

@Component({
  selector: 'mt-restaurante-detail',
  templateUrl: './restaurante-detail.component.html'
})
export class RestauranteDetailComponent implements OnInit {

  restaurante: Restaurante;

  constructor(private  restauranteService: RestaurantesService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.restauranteService.restauranteById(this.router.snapshot.params['id'])
      .subscribe(restaurante => this.restaurante = restaurante);
  }

}
