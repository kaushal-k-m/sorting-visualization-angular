import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-complexity-analysis',
  templateUrl: './complexity-analysis.component.html',
  styleUrl: './complexity-analysis.component.scss'
})

export class ComplexityAnalysisComponent {
  @Input() SelectedAlgo: string='';
  sortingAlgorithmsComplexity:any = {
    'Bubble Sort': {
      timeComplexity: {
        best: 'O(n)',
        average: 'O(n<sup>2</sup>)',
        worst: 'O(n<sup>2</sup>)',
      },
      spaceComplexity: 'O(1)',
    },
    'Selection Sort': {
      timeComplexity: {
        best: 'O(n<sup>2</sup>)',
        average: 'O(n<sup>2</sup>)',
        worst: 'O(n<sup>2</sup>)',
      },
      spaceComplexity: 'O(1)',
    },
    'Insertion Sort': {
      timeComplexity: {
        best: 'O(n)',
        average: 'O(n<sup>2</sup>)',
        worst: 'O(n<sup>2</sup>)',
      },
      spaceComplexity: 'O(1)',
    },
    'Merge Sort': {
      timeComplexity: {
        best: 'O(n log n)',
        average: 'O(n log n)',
        worst: 'O(n log n)', 
      },
      spaceComplexity: 'O(n)',
    },
    'Quick Sort': {
      timeComplexity: {
        best: 'O(n log n)',
        average: 'O(n log n)',
        worst: 'O(n<sup>2</sup>)',
      },
      spaceComplexity: 'O(log n)', // average case; worst case can be O(n)
    }
  };
  

}
