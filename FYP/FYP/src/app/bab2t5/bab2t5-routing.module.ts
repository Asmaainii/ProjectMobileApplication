import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bab2t5Page } from './bab2t5.page';

const routes: Routes = [
  {
    path: '',
    component: Bab2t5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bab2t5PageRoutingModule {}
