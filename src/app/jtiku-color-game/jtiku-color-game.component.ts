import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jtiku-color-game',
  templateUrl: './jtiku-color-game.component.html',
  styleUrls: ['./jtiku-color-game.component.css']
})


export class JtikuColorGameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  colors = '';
  allNums = '';

  add = () => this.allNums = this.colors;

}
