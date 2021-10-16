import { Component } from '@angular/core';

interface Preferences {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-jac-component',
  templateUrl: './jac-component.component.html',
  styleUrls: ['./jac-component.component.css']
})
export class JacComponentComponent {
  preferences: Preferences[] = [
    {value: 'charred', viewValue: 'Charred to a crisp!'}
    ,{value: 'sloppy', viewValue: 'Dump water on it'}
    ,{value: 'fire', viewValue: 'Served whilst aflame'}
    ,{value: 'hotdamp', viewValue: 'Hot and damp (water plus flame)'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
