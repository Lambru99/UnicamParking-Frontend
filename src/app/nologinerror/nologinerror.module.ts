import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NologinerrorPageRoutingModule } from './nologinerror-routing.module';

import { NologinerrorPage } from './nologinerror.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NologinerrorPageRoutingModule
  ],
  declarations: [NologinerrorPage]
})
export class NologinerrorPageModule {}
