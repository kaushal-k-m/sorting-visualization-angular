import { Component } from '@angular/core';
import { SortServiceService } from '../../SortService/sort-service.service';
@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrl: './controller.component.scss'
})
export class ControllerComponent {
  constructor(public sortService:SortServiceService
  ) { }
  algorithms: string[] = ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort'];
  selected_Algo: string = "Merge Sort";
  isSortingDone:boolean=false;
  ngOnInit(): void {
    this.isSortingDone=false;
  }

  selectAlgorithm(event: any): void{
    if(this.isSortingDone==false)
    {
      this.selected_Algo=event;
      console.log("Selected algorithm "+this.selected_Algo);
    }

  }

  SortArr() {
    this.isSortingDone = true; 
    this.sortService.startSorting(this.selected_Algo).then(() => {
      this.isSortingDone = false; 
    });
  }
}
