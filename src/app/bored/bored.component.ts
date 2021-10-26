import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.css']
})
export class BoredComponent implements OnInit {

  activity: string;
  activities: string[];
  myRadio: string;
  value: string;



  constructor() { 
    this.activity = '';
    this.activities = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];
    this.myRadio = '';
    this.value = '';
  }

  ngOnInit(): void {
  }

  findSomethingToDo() {

  const url = `https://www.boredapi.com/api/activity?type=${this.myRadio}`;

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
