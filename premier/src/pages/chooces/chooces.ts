import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {RtPage} from "../rt/rt";
import {RtsPage} from "../rts/rts";

/**
 * Generated class for the ChoocesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-chooces',
  templateUrl: 'chooces.html',
})
export class ChoocesPage {

  constructor(private app : App,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoocesPage');
  }
  openRtPage(){
    this.app.getRootNav().setRoot(RtPage);
  }

  openRtsPage(): void{
    this.app.getRootNav().setRoot(RtsPage);
  }
}
