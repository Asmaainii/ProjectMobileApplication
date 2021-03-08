import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tingkatan4PageRoutingModule } from './tingkatan4-routing.module';

import { Tingkatan4Page } from './tingkatan4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tingkatan4PageRoutingModule
  ],
  declarations: [Tingkatan4Page]
})
export class Tingkatan4PageModule {}
