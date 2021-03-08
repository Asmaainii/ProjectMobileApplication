import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bab5t5Page } from './bab5t5.page';

const routes: Routes = [
  {
    path: '',
    component: Bab5t5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bab5t5PageRoutingModule {}
