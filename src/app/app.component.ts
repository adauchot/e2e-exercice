import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e2e-exercice';

  // Checkout
  customerEmail: string = '';
  creditCardNumber: string = '';
  expirationDate: string = '';
  cvv: string = '';

  constructor(private http: HttpClient) { }

  onConfirmCheckout() {
    this.http.post('http://localhost:3005/checkout', {
      email: this.customerEmail,
      creditCardNumber: this.creditCardNumber,
      expirationDate: this.expirationDate,
      cvv: this.cvv
    }).subscribe(
      () => console.log('Checkout confirmed')
    );
  }
}
