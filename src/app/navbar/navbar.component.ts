import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'BHP';
  title2 = 'IRIS';
  loggedUser = 'John Doe';
  
  constructor() { }

  ngOnInit() {
  }

}
