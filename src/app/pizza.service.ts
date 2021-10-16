import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppings() {
      //Pretend to get a web service call
      const toppings = [
          {
              name: 'Olives',
              price: 2.25
          },
          {
              name: 'Onions',
              price: 2.35
          },
          {
              name: 'Peppers',
              price: 1.75
          }
      ];

      return toppings;
  }
}
