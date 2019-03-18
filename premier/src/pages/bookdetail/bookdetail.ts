import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BookProvider} from "../../providers/book/book";

/**
 * Generated class for the BookdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bookdetail',
  templateUrl: 'bookdetail.html',
})
export class BookdetailPage {

  bookn:Array<any> ;
  bookDetail : Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public book : BookProvider) {
    this.bookn = navParams.get('id');
let id = this.bookn;
console.log(id);
    this.book.getBookDetail(id).subscribe(data=>{
      this.bookDetail = data;
    });
  }

  ionViewWillEnter(){


  }
  ionViewDidLoad() {

    console.log('ionViewDidLoad BookdetailPage');
  }

}
