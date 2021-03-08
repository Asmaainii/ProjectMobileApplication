import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab3t5PageRoutingModule } from './bab3t5-routing.module';

import { Bab3t5Page } from './bab3t5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab3t5PageRoutingModule
  ],
  declarations: [Bab3t5Page]
})
export class Bab3t5PageModule {}
