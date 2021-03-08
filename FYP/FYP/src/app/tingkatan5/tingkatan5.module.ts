import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tingkatan5PageRoutingModule } from './tingkatan5-routing.module';

import { Tingkatan5Page } from './tingkatan5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tingkatan5PageRoutingModule
  ],
  declarations: [Tingkatan5Page]
})
export class Tingkatan5PageModule {}
