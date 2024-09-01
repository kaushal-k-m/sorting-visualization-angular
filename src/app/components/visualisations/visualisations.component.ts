import { Component, OnInit } from '@angular/core';
import { SortServiceService } from '../../SortService/sort-service.service';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-visualisations',
  templateUrl: './visualisations.component.html',
  styleUrl: './visualisations.component.scss'
})
export class VisualisationsComponent implements OnInit {


  constructor(public sortService: SortServiceService) {}

  ngOnInit(): void {
    this.sortService.generateRandomArray(30,10,60);
  }
  ngOnChanges(): void {
  }

}
