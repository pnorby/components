import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jr-addition',
  templateUrl: './jr-addition.component.html',
  styleUrls: ['./jr-addition.component.css']
})
export class JrAdditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 10;
  numberTwo = 90;
  total = 100;

  add = () => {
      this.total = this.numberOne + this.numberTwo;
  }

  divideByTwo = () => {
      this.total = this.total/2;
  }
}
