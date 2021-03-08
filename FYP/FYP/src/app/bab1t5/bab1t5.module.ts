import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab1t5PageRoutingModule } from './bab1t5-routing.module';

import { Bab1t5Page } from './bab1t5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab1t5PageRoutingModule
  ],
  declarations: [Bab1t5Page]
})
export class Bab1t5PageModule {}
