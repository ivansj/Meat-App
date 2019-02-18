import { NgModule } from '@angular/core';

import { OrderService } from 'app/order/order.service';
import { ShoppingCartService } from 'app/restaurante-detail/shopping-cart/shopping-cart.service';
import { RestaurantesService } from 'app/restaurantes/restaurantes.service';

@NgModule({
    providers: [OrderService, ShoppingCartService, RestaurantesService]
})

export class CoreModule { }
