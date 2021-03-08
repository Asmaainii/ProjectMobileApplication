import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab3t4PageRoutingModule } from './bab3t4-routing.module';

import { Bab3t4Page } from './bab3t4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab3t4PageRoutingModule
  ],
  declarations: [Bab3t4Page]
})
export class Bab3t4PageModule {}
