import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SlackNTellService {
  constructor() {}

  getAppetizers = () => {
    const appetizers = [
      {
        name: 'Wings',
        price: 6.99,
      },
      {
        name: 'Mozzarella Stick',
        price: 4.99,
      },
      {
        name: 'Potato Skins',
        price: 5.99,
      },
      { name: 'Soup of the Day', 
        price: 3.99 }
    ];

    return appetizers;
  };
}
