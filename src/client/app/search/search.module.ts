import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { DataService } from '../shared/data.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SearchRoutingModule, FormsModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
  providers: [DataService]  
})

export class SearchModule { }
