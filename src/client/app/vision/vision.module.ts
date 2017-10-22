import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisionComponent } from './vision.component';
import { VisionRoutingModule } from './vision-routing.module';
import { DataService } from '../shared/data.service';

@NgModule({
  imports: [CommonModule, VisionRoutingModule],
  declarations: [VisionComponent],
  exports: [VisionComponent],
  providers: [DataService]  
})
export class CuratorModule { }
