import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { RestaurantesService } from 'app/restaurantes/restaurantes.service';

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private restaurantesService: RestaurantesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantesService.reviewsOfRestaurante(this.route.parent.snapshot.params['id']);
  }

}
