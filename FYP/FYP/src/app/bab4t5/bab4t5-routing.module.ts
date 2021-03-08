import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bab4t5Page } from './bab4t5.page';

const routes: Routes = [
  {
    path: '',
    component: Bab4t5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bab4t5PageRoutingModule {}
