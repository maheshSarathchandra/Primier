import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FavoritePage} from "../favorite/favorite";
import {HomePage} from "../home/home";

/**
 * Generated class for the RtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rt',
  templateUrl: 'rt.html',
})
export class RtPage {


  tab1Root = FavoritePage;
  tab2Root = HomePage;
    constructor(public navCrtl : NavController) {
  }




}
