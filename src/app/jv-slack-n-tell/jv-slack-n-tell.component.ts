import { Component, OnInit } from '@angular/core';
import { SlackNTellService } from '../slack-ntell.service';

@Component({
  selector: 'app-jv-slack-n-tell',
  templateUrl: './jv-slack-n-tell.component.html',
  styleUrls: ['./jv-slack-n-tell.component.css']
})
export class JvSlackNTellComponent implements OnInit {

  constructor(
    private slackNTellSvc: SlackNTellService
  ) { }

  ngOnInit(): void {

    const app = this.slackNTellSvc.getAppetizers
    console.log(app)
  }

}
