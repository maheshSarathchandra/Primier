import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

/*
  Generated class for the SbookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SbookProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SbookProvider Provider');
  }



  addBook(value: any):Observable<any>{
    return this.http.post('http://localhost:3000/api/books',value)
      .pipe(tap(response=>{
        return response;
      }))
  }















  getBookList(): Observable<any> {
    return this.http.get('http://localhost:3000/api/books')
      .map((response:Response) => {
        return response;
      });
  }
}

