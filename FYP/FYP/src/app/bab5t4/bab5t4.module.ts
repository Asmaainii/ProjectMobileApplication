import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab5t4PageRoutingModule } from './bab5t4-routing.module';

import { Bab5t4Page } from './bab5t4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab5t4PageRoutingModule
  ],
  declarations: [Bab5t4Page]
})
export class Bab5t4PageModule {}
