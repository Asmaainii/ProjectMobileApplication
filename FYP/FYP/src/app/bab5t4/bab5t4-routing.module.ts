import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bab5t4Page } from './bab5t4.page';

const routes: Routes = [
  {
    path: '',
    component: Bab5t4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bab5t4PageRoutingModule {}
