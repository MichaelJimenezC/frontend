import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaunaPageRoutingModule } from './fauna-routing.module';

import { FaunaPage } from './fauna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaunaPageRoutingModule
  ],
  declarations: [FaunaPage]
})
export class FaunaPageModule {}
