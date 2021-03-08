import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab2t4PageRoutingModule } from './bab2t4-routing.module';

import { Bab2t4Page } from './bab2t4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab2t4PageRoutingModule
  ],
  declarations: [Bab2t4Page]
})
export class Bab2t4PageModule {}
