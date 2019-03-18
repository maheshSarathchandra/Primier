import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {tap} from "rxjs/operators";

/*
  Generated class for the AuthserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthserviceProvider {
  // private jwtTokenName = 'accessToken';
  //
  // authUser = new ReplaySubject<any>(1);
  //
  // constructor(private readonly httpClient: HttpClient,
  //             private readonly storage: Storage,
  //             private readonly jwtHelper: JwtHelperService) {
  // }

  // checkLogin() {
  //   this.storage.get(this.jwtTokenName).then(jwt => {
  //     if (jwt && !this.jwtHelper.isTokenExpired(jwt)) {
  //       this.httpClient.get('http://localhost:3000')
  //         .subscribe(() => this.authUser.next(jwt),
  //           (err) => this.storage.remove(this.jwtTokenName).then(() => this.authUser.next(null)));
  //       // OR
  //       // this.authUser.next(jwt);
  //     }
  //     else {
  //       this.storage.remove(this.jwtTokenName).then(() => this.authUser.next(null));
  //     }
  //   });
  // }
  //
  // login(values: any): Observable<any> {
  //   return this.httpClient.post('http://localhost:3000', values, {responseType: 'text'})
  //     .pipe(tap(jwt => this.handleJwtResponse(jwt)));
  // }
  //
  // logout() {
  //   this.storage.remove(this.jwtTokenName).then(() => this.authUser.next(null));
  // }
  //
  // signup(values: any): Observable<any> {
  //   return this.httpClient.post('http://localhost:3000', values, {responseType: 'text'})
  //     .pipe(tap(jwt => {
  //       if (jwt !== 'Username is already taken!') {
  //         // return this.handleJwtResponse(jwt);
  //       }
  //       return jwt;
  //     }));
  // }
  //
  // private handleJwtResponse(jwt: string) {
  //   return this.storage.set(this.jwtTokenName, jwt)
  //     .then(() => this.authUser.next(jwt))
  //     .then(() => jwt);
  // }

}
