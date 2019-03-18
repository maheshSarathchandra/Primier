import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BookProvider} from "../../providers/book/book";

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  bookL: Array<any>;
  name : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public book : BookProvider) {

  this.name = 'koplk;l';
  }

  ionViewWillEnter(){
    this.book.getFavoriteList().subscribe(data =>{
      this.bookL = data;
    });
  }





  removefavorite(id){
    this.book.removeOneBook(id).subscribe(data=>{
      console.log(data);
    });


    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

}
