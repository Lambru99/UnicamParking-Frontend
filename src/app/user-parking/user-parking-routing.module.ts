import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserParkingPage } from './user-parking.page';


const routes: Routes = [
  {
    path: '',
    component: UserParkingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserParkingPageRoutingModule {}
