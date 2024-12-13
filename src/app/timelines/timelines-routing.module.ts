import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelinesPage } from './timelines.page';

const routes: Routes = [
  {
    path: '',
    component: TimelinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimelinesPageRoutingModule {}
