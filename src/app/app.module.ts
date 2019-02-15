import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestaurantesService } from './restaurantes/restaurantes.service';
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';
import { MenuComponent } from './restaurante-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurante-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurante-detail/menu-item/menu-item.component';
import { ReviewComponent } from './restaurante-detail/review/review.component';
import { ShoppingCartService } from './restaurante-detail/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { OrderService } from './order/order.service';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestauranteComponent,
    RestauranteDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantesService, ShoppingCartService, OrderService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
