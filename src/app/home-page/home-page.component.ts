import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  tiles = [
    {text: 'weather scroll', cols: 4, rows: 1/2, color: 'lightblue'},
    {text: 'Search/Navigation component', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Dashboard', cols: 3, rows: 6, color: 'lightpink'},
    {text: 'IOP list', cols: 1, rows:4, color: 'red'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
