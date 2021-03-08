import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab2t5PageRoutingModule } from './bab2t5-routing.module';

import { Bab2t5Page } from './bab2t5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab2t5PageRoutingModule
  ],
  declarations: [Bab2t5Page]
})
export class Bab2t5PageModule {}
