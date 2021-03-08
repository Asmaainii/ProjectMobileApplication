import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab4t5PageRoutingModule } from './bab4t5-routing.module';

import { Bab4t5Page } from './bab4t5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab4t5PageRoutingModule
  ],
  declarations: [Bab4t5Page]
})
export class Bab4t5PageModule {}
