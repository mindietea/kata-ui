import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VisionComponent } from './vision.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'vision', component: VisionComponent }
    ])
  ],
  exports: [RouterModule]
})
export class VisionRoutingModule { }
