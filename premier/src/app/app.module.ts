import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BookProvider } from '../providers/book/book';
import {HttpClientModule} from "@angular/common/http";
import {FavoritePage} from "../pages/favorite/favorite";
import {RtPage} from "../pages/rt/rt";
import {HistoryPage} from "../pages/history/history";
import {UpcomingPage} from "../pages/upcoming/upcoming";
import {RtsPage} from "../pages/rts/rts";
import { SbookProvider } from '../providers/sbook/sbook';
import {CommentPage} from "../pages/comment/comment";
import {BookdetailPage} from "../pages/bookdetail/bookdetail";
import {JWT_OPTIONS, JwtModule} from "@auth0/angular-jwt";
import {Storage, IonicStorageModule} from "@ionic/storage";
import {CustomFormsModule} from "ng2-validation";
import { AuthserviceProvider } from '../providers/authservice/authservice';
import {SignupPage} from "../pages/signup/signup";
import {LoginPage} from "../pages/login/login";
import {ChoocesPage} from "../pages/chooces/chooces";


export function jwtOptionsFactory(storage: Storage) {
  return {
    tokenGetter: () => storage.get('accessToken'),
    whitelistedDomains: ['localhost:3000']
  }
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavoritePage,
    RtPage,
    HistoryPage,
    UpcomingPage,
    RtsPage,
    CommentPage,
    BookdetailPage,
    SignupPage,
    LoginPage,
    ChoocesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CustomFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavoritePage,
    RtPage,
    HistoryPage,
    UpcomingPage,
    RtsPage,
    CommentPage,
    BookdetailPage,
    SignupPage,
    LoginPage,
    ChoocesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BookProvider,
    SbookProvider,
    AuthserviceProvider
  ]
})
export class AppModule {}
