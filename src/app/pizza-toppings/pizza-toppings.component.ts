import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaToppingDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  constructor(
    private pizzaSvc: PizzaService
  ) { }

  avaiblePizzaToppings: PizzaToppingDisplay[] = [];

  ngOnInit(): void {

    const pt = this.pizzaSvc.getPizzaToppingsFromTheCloud();
    console.log(pt);

    this.avaiblePizzaToppings = pt.map(
      x => ({
        ...x
        , checked: false
      })
    );

    console.log(this.avaiblePizzaToppings);
  }

}
