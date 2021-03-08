import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bab1t5Page } from './bab1t5.page';

const routes: Routes = [
  {
    path: '',
    component: Bab1t5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bab1t5PageRoutingModule {}
