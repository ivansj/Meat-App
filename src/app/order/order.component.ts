import { Component, OnInit } from '@angular/core';
import { RadionOption } from 'app/shared/radio/radio_option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurante-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from 'app/order/order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery = 4;

  paymentOptions: RadionOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit() { }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  itemsValue (): number {
    return this.orderService.itemsValue();
  }

  checkOrder (order: Order) {
    order.orderItems =  this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
     this.orderService.checkOrder(order)
      .subscribe( (orderId: string) => {
        console.log(`Compra concluída ${orderId}`);
        this.orderService.clear();
      });
    console.log(order);
  }
}