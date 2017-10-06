import { Component, OnInit } from '@angular/core';
import { CheckingDirective } from '../app.directive';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  constructor(private homeService: HomeService ) { }
  ngOnInit() {
    console.log('boom');
  }

  send() {
    this.homeService.getApi()
      .then((response) => {
        console.log('success', response);
      })
      .catch((error) => {
        console.log('failed', error);
      });
  }

}
