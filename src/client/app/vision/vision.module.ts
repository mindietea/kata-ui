import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisionComponent } from './vision.component';
import { VisionRoutingModule } from './vision-routing.module';
import { DataService } from '../shared/data.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, VisionRoutingModule, FormsModule],
  declarations: [VisionComponent],
  exports: [VisionComponent],
  providers: [DataService]  
})

export class VisionModule { }
