import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bab3t5Page } from './bab3t5.page';

const routes: Routes = [
  {
    path: '',
    component: Bab3t5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bab3t5PageRoutingModule {}
