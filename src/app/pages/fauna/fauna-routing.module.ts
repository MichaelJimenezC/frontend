import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaunaPage } from './fauna.page';

const routes: Routes = [
  {
    path: '',
    component: FaunaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaunaPageRoutingModule {}
