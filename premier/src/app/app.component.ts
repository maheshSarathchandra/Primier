import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {RtPage} from "../pages/rt/rt";
import {RtsPage} from "../pages/rts/rts";
import {AuthserviceProvider} from "../providers/authservice/authservice";
import {LoginPage} from "../pages/login/login";
import {ChoocesPage} from "../pages/chooces/chooces";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any =  ChoocesPage; // s

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {



    // platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    statusBar.styleDefault();
    splashScreen.hide();

  //   authServiceProvider.authUser.subscribe(jwt => {
      // if () {
      // this.rootPage = RtPage;
     //  }
    //  else {
   //      this.rootPage = RtsPage;
   //   }
  //   });
  //
  //   authServiceProvider.checkLogin();
   }


}

