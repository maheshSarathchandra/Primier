import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RtsPage } from './rts';

@NgModule({
  declarations: [
    RtsPage,
  ],
  imports: [
    IonicPageModule.forChild(RtsPage),
  ],
})
export class RtsPageModule {}
