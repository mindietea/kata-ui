import { Component, OnInit } from '@angular/core';
import { DataService, Curator, Kard } from '../shared/data.service';

@Component({
  moduleId: module.id,
  selector: 'sd-curator',
  templateUrl: 'curator.component.html',
  styleUrls: ['curator.component.css']
})
export class CuratorComponent implements OnInit {
  message: string = "start";
  c: Curator;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.c = this.dataService.activeCurator;
  }

  follow(val:boolean) {
    this.dataService.following[this.c.id] = val;
  }

}
