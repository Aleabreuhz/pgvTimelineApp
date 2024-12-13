import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimelinesPageRoutingModule } from './timelines-routing.module';

import { TimelinesPage } from './timelines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimelinesPageRoutingModule
  ],
  declarations: [TimelinesPage]
})
export class TimelinesPageModule {}
