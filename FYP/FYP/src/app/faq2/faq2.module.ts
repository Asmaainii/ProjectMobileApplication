import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Faq2PageRoutingModule } from './faq2-routing.module';

import { Faq2Page } from './faq2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Faq2PageRoutingModule
  ],
  declarations: [Faq2Page]
})
export class Faq2PageModule {}
