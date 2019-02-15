import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './restaurante-detail/menu/menu.component';
import { ReviewComponent } from './restaurante-detail/review/review.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'restaurante/:id', component: RestauranteDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewComponent}
    ]},
    {path: 'order', component: OrderComponent},
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: 'about', component: AboutComponent}
];
