import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
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
  newKard: Kard;

  showForm: boolean;

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public dataService: DataService,
              private router: Router, private titlecasePipe: TitleCasePipe) {
    this.showForm = false;
    this.kards = [];
    this.newKard = {
        curator: 0,
        title: "",
        description: "",
        products: [
          {
            title: "",
            image: "",
            link: "",
            status: true
          }
        ]
      }
    }

  transformName() {
    this.fullName = this.titlecasePipe.transform(this.fullName);
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

  submitKard() {
    this.dataService.postKard(this.newKard)
      .subscribe(
        r => {
          console.log(r);
        }
      );
  }

  showF() {
    this.showForm = true;
  }

}
