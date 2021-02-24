import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserParkingPageRoutingModule } from './user-parking-routing.module';

import { UserParkingPage } from './user-parking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserParkingPageRoutingModule
  ],
  declarations: [UserParkingPage]
})
export class UserParkingPageModule {}
