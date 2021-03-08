import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab5t5PageRoutingModule } from './bab5t5-routing.module';

import { Bab5t5Page } from './bab5t5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab5t5PageRoutingModule
  ],
  declarations: [Bab5t5Page]
})
export class Bab5t5PageModule {}
