import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { RestaurantesService } from 'app/restaurantes/restaurantes.service';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(private restaurantesService: RestaurantesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantesService.menuOfRestaurante(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }

}
