import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pn-fizz-buzz',
  templateUrl: './pn-fizz-buzz.component.html',
  styleUrls: ['./pn-fizz-buzz.component.css']
})
export class PnFizzBuzzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  theNumber = 1;
  theResult = "Just a number";
  checkFizzBuzz = () => {
    
    if (this.theNumber %15 == 0){
      this.theResult = "FizzBuzz";
    } 
    else if (this.theNumber %5 == 0){
      this.theResult = "Buzz";
      
    }
    else if (this.theNumber %3 == 0) {
      
      this.theResult = "Fizz";
    }
    else {
      
      this.theResult = "Just a number";    
    }
  }
}
