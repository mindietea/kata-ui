import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { DataService } from '../shared/data.service';

@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [NameListService, DataService]
})
export class HomeModule { }
