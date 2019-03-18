import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SbookProvider} from "../../providers/sbook/sbook";

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  books : Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public bookProvider: SbookProvider) {
  }

  ionViewWillEnter(){
    this.bookProvider.getBookList().subscribe(data =>{
      this.books = data;
    });
  }

}
