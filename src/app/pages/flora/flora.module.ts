import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloraPageRoutingModule } from './flora-routing.module';

import { FloraPage } from './flora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloraPageRoutingModule
  ],
  declarations: [FloraPage]
})
export class FloraPageModule {}
