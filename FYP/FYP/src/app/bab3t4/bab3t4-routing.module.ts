import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bab3t4Page } from './bab3t4.page';

const routes: Routes = [
  {
    path: '',
    component: Bab3t4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bab3t4PageRoutingModule {}
