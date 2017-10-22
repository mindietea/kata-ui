import { Component, OnInit } from '@angular/core';
import { DataService, Curator, Kard } from '../shared/data.service';

import { Router } from '@angular/router';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  kards: Kard[];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public dataService: DataService,
              private router: Router) {
    this.kards = [];
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.dataService.getKards()
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

  curate(num:number) {
    this.dataService.activeCurator = this.dataService.curators[num];
    this.router.navigateByUrl("/curator");
  }

}
