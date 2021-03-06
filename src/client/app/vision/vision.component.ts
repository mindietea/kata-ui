import { Component, OnInit } from '@angular/core';
import { DataService, Kard } from '../shared/data.service';

@Component({
  moduleId: module.id,
  selector: 'sd-vision',
 templateUrl: 'vision.component.html',
 styleUrls: ['vision.component.css']
})
export class VisionComponent implements OnInit {
  ngOnInit(): void {
  }

  kards: any[];
  userIn:String;
  constructor(public dataService: DataService) {
    this.kards = [];
    this.userIn = "";
  }

   doVision(){
    this.dataService.getVisionResults(this.userIn)
      .subscribe(
        r => {
          console.log(r['results'])
          this.kards = r['results'];
          console.log(this.kards);
        }
      );
  }

 // follow(val:boolean) {
 //   this.dataService.following[this.c.id] = val;
 // }

}
