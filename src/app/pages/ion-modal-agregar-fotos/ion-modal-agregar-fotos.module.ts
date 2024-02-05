import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonModalAgregarFotosPageRoutingModule } from './ion-modal-agregar-fotos-routing.module';

import { IonModalAgregarFotosPage } from './ion-modal-agregar-fotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IonModalAgregarFotosPageRoutingModule
  ],
  declarations: [IonModalAgregarFotosPage]
})
export class IonModalAgregarFotosPageModule {}
