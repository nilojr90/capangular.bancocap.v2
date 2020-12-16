import { Component, Inject, OnInit } from '@angular/core';
import { API_URL } from './../../token';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.css', './home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(API_URL) private apiURL: string) {

    console.log(apiURL);
  }

  ngOnInit(): void {
  }

}
