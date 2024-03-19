import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e2e-exercice';

  constructor(private http: HttpClient) { }

  onConfirmCheckout() {
    console.log('Confirm checkout');
  }
}
