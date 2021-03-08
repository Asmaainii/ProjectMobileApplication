import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tingkatan5Page } from './tingkatan5.page';

const routes: Routes = [
  {
    path: '',
    component: Tingkatan5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tingkatan5PageRoutingModule {}
