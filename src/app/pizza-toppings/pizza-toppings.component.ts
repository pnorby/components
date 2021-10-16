import { Component, OnInit } from '@angular/core';
import { PizzaService } from "../pizza.service";

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {


    //
  constructor(
      private pizzaSvc: PizzaService
  ) { }

  ngOnInit(): void {
      const pt = this.pizzaSvc.getPizzaToppings();
      console.log(pt);

  }

}
