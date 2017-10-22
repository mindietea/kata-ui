import { Component, OnInit } from '@angular/core';
import { DataService, Kard } from '../shared/data.service';

@Component({
  moduleId: module.id,
  selector: 'sd-search',
 templateUrl: 'search.component.html',
 styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {
  ngOnInit(): void {
  }
  userIn :String;
  kards: any[];
  constructor(public dataService: DataService) {
    this.kards = []
    this.userIn = ""
  }

   doSearch(){
    this.dataService.getSearchResults(this.userIn)
      .subscribe(
        r => {
          this.kards = r;
          console.log(this.kards);
        },
        err => {
          console.log(err)
        }
      );
  }

 // follow(val:boolean) {
 //   this.dataService.following[this.c.id] = val;
 // }

}
