import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tingkatan4Page } from './tingkatan4.page';

const routes: Routes = [
  {
    path: '',
    component: Tingkatan4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tingkatan4PageRoutingModule {}
