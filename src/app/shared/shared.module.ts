import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';

import { OrderService } from 'app/order/order.service';
import { ShoppingCartService } from 'app/restaurante-detail/shopping-cart/shopping-cart.service';
import { RestaurantesService } from 'app/restaurantes/restaurantes.service';
import { SnackbarComponent } from 'app/shared/messages/snackbar/snackbar.component';
import { NotificationService } from './messages/noticafication.service';


@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule,  ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent,
              CommonModule, FormsModule,  ReactiveFormsModule,
              SnackbarComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [OrderService, ShoppingCartService, RestaurantesService, NotificationService]
        }
    }
}
