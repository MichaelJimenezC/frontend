import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonModalAgregarFotosPage } from './ion-modal-agregar-fotos.page';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: IonModalAgregarFotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonModalAgregarFotosPageRoutingModule {}
