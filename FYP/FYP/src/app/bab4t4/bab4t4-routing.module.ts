import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bab4t4Page } from './bab4t4.page';

const routes: Routes = [
  {
    path: '',
    component: Bab4t4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bab4t4PageRoutingModule {}
