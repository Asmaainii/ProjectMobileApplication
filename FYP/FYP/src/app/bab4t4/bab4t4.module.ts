import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab4t4PageRoutingModule } from './bab4t4-routing.module';

import { Bab4t4Page } from './bab4t4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab4t4PageRoutingModule
  ],
  declarations: [Bab4t4Page]
})
export class Bab4t4PageModule {}
