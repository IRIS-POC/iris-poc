import { Injectable } from '@angular/core';

import { Headers, Http, RequestOptions } from '@angular/http';
import { User } from '../model/user';
import { Observable, of  } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppUrl } from '../model/app-url';
import { Success } from '../model/success';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private appurl = new AppUrl().url;

  constructor(private http: Http) { }

  checkLogin(username: string, password: string): Observable<User> {
    let u: User = new User();
    u.username = username;
    u.password = password;

    // ignore these for now until backend setup. returns blank user for now
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.appurl + '/login', u ,{ headers: headers, withCredentials: true })
    .pipe(map(resp => {
        let j: any = resp.json();
        let u = j as User;
        let tempUser: User;
        return tempUser;
      }
    ));
  }

  //ignore for now
  getLoggedInUser(): Observable<User> {
    return this.http.get(this.appurl + '/loggedIn', { withCredentials: true })
    .pipe(map(resp => {
            console.log("Response from /loggedIn:");
            console.log(resp);
            let jsonResp = resp.json();
            console.log("Resulting json:");
            console.log(jsonResp);
            return jsonResp as User;
        }
    ));
  }

  //ignore for now
  logout(): Observable<Success> {
    let respose: any = this.http.get(this.appurl + '/logout', { withCredentials: true });
    return respose.map(resp => {
        let jsonResp = resp.json();
        console.log("Reponse from /logout:");
        console.log(jsonResp);
        return jsonResp as Success;
    });
  }
}
