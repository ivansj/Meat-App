import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';

import { OrderService } from 'app/order/order.service';
import { ShoppingCartService } from 'app/restaurante-detail/shopping-cart/shopping-cart.service';
import { RestaurantesService } from 'app/restaurantes/restaurantes.service';


@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent],
    imports: [CommonModule, FormsModule,  ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent,
              CommonModule, FormsModule,  ReactiveFormsModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [OrderService, ShoppingCartService, RestaurantesService]
        }
    }
}
