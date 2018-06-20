import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { LoginService } from '../service/login.service';
import { Success } from '../model/success';
import { Key } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  message: string = '';

  username: string;
  password: string;

  constructor(
    private loginservice: LoginService,
    public router: Router
    ) {
     
   }

  ngOnInit() {
    //this.loginservice.getLoggedInUser().subscribe(u => {
    //  if(u) {
    //    this.router.navigateByUrl('home');
    //  }
    //})
  }

  login() {
    this.message = null;
    console.log(this.username + ", " + this.password);
    console.log("going to home page");
    this.router.navigateByUrl('home');
    //this.loginservice.checkLogin(this.username, this.password).subscribe(u => {
    //  if(u) {
    //    this.user = u;
    //    this.router.navigateByUrl('home');
    //  } else {
    //    this.message = 'Invalid credentials!'
    //  }
    //})
  }
}
