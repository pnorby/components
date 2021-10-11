import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromTheCloud() {
    //Pretend we make a web service call here.
    const toppingsFromWebService = [
      {
        name: 'olives'
      , price: 2.25
      }
      , {
        name: 'pepperoni'
        , price: 1.25
      }
      , {
        name: 'roasted cauliflower'
        , price: .75
      }
    ];

    return toppingsFromWebService;
  }
}
