import { Component, OnInit } from '@angular/core';
import { SlackNTellService } from '../slack-ntell.service';

interface AppetizersDisplay {
  name: string;
  price: number;
  checked: boolean;
};

@Component({
  selector: 'app-jv-slack-n-tell',
  templateUrl: './jv-slack-n-tell.component.html',
  styleUrls: ['./jv-slack-n-tell.component.css']
})
export class JvSlackNTellComponent implements OnInit {

  constructor(
    private slackNTellSvc: SlackNTellService
  ) { }

  availableAppetizers: AppetizersDisplay[] = [];

  ngOnInit(): void {

    const apps = this.slackNTellSvc.getAppetizers()

    this.availableAppetizers = apps.map(
      x => ({
        ...x
        , checked: false
      })
    );
  }

get appsPrice(){
return this.availableAppetizers
.filter(
  x => x.checked
)
.reduce(
  (acc, x)=> acc + x.price
  , 0
)
;
} 

get apps() { // right now: ['1','3']
  return this.availableAppetizers
            .filter(x => x.checked)
            .map(x => x.name)
}


checkAllApps = () => this.availableAppetizers = this.availableAppetizers.map(
  x => ({
    ...x
    , checked: true
  })
);

uncheckAllApps = () => this.availableAppetizers = this.availableAppetizers.map(
  x => ({
    ...x
    , checked: false
  })
);
}
