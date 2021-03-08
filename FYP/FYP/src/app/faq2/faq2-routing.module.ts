import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Faq2Page } from './faq2.page';

const routes: Routes = [
  {
    path: '',
    component: Faq2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Faq2PageRoutingModule {}
