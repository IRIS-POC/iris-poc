import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-status',
  templateUrl: './weather-status.component.html',
  styleUrls: ['./weather-status.component.css']
})
export class WeatherStatusComponent implements OnInit {

  message: string = 'Weather weather weather~';
  
  constructor() { }

  ngOnInit() {
  }

}
