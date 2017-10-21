import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CuratorComponent } from './curator.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'curator', component: CuratorComponent }
    ])
  ],
  exports: [RouterModule]
})
export class CuratorRoutingModule { }
