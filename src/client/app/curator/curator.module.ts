import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuratorComponent } from './curator.component';
import { CuratorRoutingModule } from './curator-routing.module';
import { DataService } from '../shared/data.service';

@NgModule({
  imports: [CommonModule, CuratorRoutingModule],
  declarations: [CuratorComponent],
  exports: [CuratorComponent],
  providers: [DataService]  
})
export class CuratorModule { }
