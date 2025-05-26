import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartCountSubject = new Subject<number>();
  private totalItems = 0;

  getCartUpdates() {
    return this.cartCountSubject.asObservable();
  }

  addToCart(product: any) {
    this.totalItems++;
    this.cartCountSubject.next(this.totalItems); // notifico
  }
}
