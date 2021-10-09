import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromTheCloud() {
    // Pretend we make a web service call here.
    const toppingsFromWebService = [
      {
        name: 'Olives'
        , price: 2.25
      }
      ,{
        name: 'Pepperoni'
        , price: 2.25
      }
      ,{
        name: 'Sausage'
        , price: 2.25
      }
    ];

    return toppingsFromWebService;
  }
}
