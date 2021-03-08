import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab1t4PageRoutingModule } from './bab1t4-routing.module';

import { Bab1t4Page } from './bab1t4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab1t4PageRoutingModule
  ],
  declarations: [Bab1t4Page]
})
export class Bab1t4PageModule {}
