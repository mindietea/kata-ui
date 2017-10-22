import { Component, OnInit } from '@angular/core';
import { DataService, Curator, Kard } from '../shared/data.service';

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
  constructor(public dataService: DataService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
  }

}
