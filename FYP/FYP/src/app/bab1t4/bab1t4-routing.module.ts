import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bab1t4Page } from './bab1t4.page';

const routes: Routes = [
  {
    path: '',
    component: Bab1t4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bab1t4PageRoutingModule {}
