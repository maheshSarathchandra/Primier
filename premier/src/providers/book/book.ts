import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
//import {Response} from "@angular/http";
/*
  Generated class for the BookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BookProvider Provider');
  }

  getBookList(): Observable<any> {
    return this.http.get('http://localhost:3000/api/books')
      .map((response:Response) => {
        return response;
      });
  }

  getBookDetail(id :any):Observable<any>{
    return this.http.get('http://localhost:3000/api/books/'+id)
      .pipe(tap(res=>{
        res
      }));
  }


  getFavoriteList(): Observable<any> {
    return this.http.get('http://localhost:3000/api/favotites')
      .map((response:Response) => {
        return response;
      });
  }




  addFavoritebook(name : any):Observable<any>{
    let insert = {
      bookName:name,
      bookPrice:"koktopkpotpo",
      picture:"kgptorjkgpotk",
      auther:"huighituhgoir",
      translator:"kokopkl"
    };
      return this.http.post('http://localhost:3000/api/favotites',insert)
        .pipe(tap(data=>{
          return data;
        }));
    }




  addComment(value: any,id: any):Observable<any>{
    let insert = {
      comment:value,
      book:id
    };
    return this.http.post('http://localhost:3000/api/comments',insert,{responseType:"text"})
      .pipe(tap(response=>{
        return response;
      }))
  }

  getComment():Observable<any>{
    return this.http.get('http://localhost:3000/api/comments')
      .map((response:Response)=>{
        return response;
        }
      );
  }




























  removeOneBook(id :any):Observable<any>{
    return this.http.delete('http://localhost:3000/api/favotites/'+id)
      .pipe(tap(response=>{
        return response ;
      }));
  }

  remoCommen(num :any):Observable<any>{
    return this.http.delete('http://localhost:3000/api/comments/'+num)
      .pipe(tap(response=>{
        return response;
      }))
  }
}















