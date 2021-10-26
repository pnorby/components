import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.css']
})
export class BoredComponent implements OnInit {

  activity: string;

  constructor() { 
    this.activity = '';
  }

  ngOnInit(): void {
  }



  findSomethingToDo() {

  const url = 'https://www.boredapi.com/api/activity/';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Do something with the data
        this.activity = `You should ${data.activity.toLowerCase()}.`;
        console.log(data.activity);
    })
    .catch(error => console.log(error))
    .finally(() => {
        // Finally do something
    });



  }





}
