import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloraPage } from './flora.page';

const routes: Routes = [
  {
    path: '',
    component: FloraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloraPageRoutingModule {}
