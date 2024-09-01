import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortServiceService {
  current_Comparison: number[] = [];
  current_Swap: number[] = [];
  speed: number = 5750;
  arrayToSort: number[] = [99, 88, 77, 66, 55, 44, 33];
  opacity: number=1;

  constructor() {}

  generateRandomArray(size: number, min: number, max: number) {
    const array: number[] = [];
    for (let i = 0; i < size; i++) {
      array.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    this.arrayToSort = array;
  }

  getColor(index: number,num:number): string {
    if (this.current_Comparison.includes(index)) {
      this.opacity=1;
      return '#FA8072'; // Elements being compared
    } else if (this.current_Swap.includes(index)) {
      this.opacity=1;
      return '#90EE90'; // Elements being swapped or sorted
    } else {
      this.opacity=num/60;
      return 'rgb(97 133 130 )'; // Default color
    }
  }

  async BubbleSort(arr: number[]): Promise<number[]> {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        this.current_Comparison = [j, j + 1];
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          this.current_Swap = [j, j + 1];
        }
        this.arrayToSort = [...arr];
        await new Promise(resolve => setTimeout(resolve, 6000 - this.speed));
      }
      this.current_Comparison = [];
    }
    this.current_Swap = [];
    return arr;
  }

  async SelectionSort(arr: number[]): Promise<number[]> {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        this.current_Comparison = [minIndex, j];
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
        await new Promise(resolve => setTimeout(resolve, 6000 - this.speed));
      }
      this.current_Comparison = [];
      if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        this.current_Swap = [i, minIndex];
      }
      this.arrayToSort = [...arr];
      await new Promise(resolve => setTimeout(resolve, 6000 - this.speed));
    }
    this.current_Swap = [];
    return arr;
  }

  async InsertionSort(arr: number[]): Promise<number[]> {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      this.current_Comparison = [j, i];
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
        this.current_Swap = [j + 1, i];
        this.arrayToSort = [...arr];
        await new Promise(resolve => setTimeout(resolve, 6000 - this.speed));
      }
      arr[j + 1] = key;
      this.current_Comparison = [];
      this.arrayToSort = [...arr];
      await new Promise(resolve => setTimeout(resolve, 6000 - this.speed));
    }
    this.current_Swap = [];
    return arr;
  }

  async QuickSort(arr: number[], low: number = 0, high: number = arr.length - 1): Promise<void> {
    if (low < high) {
      const pivotIndex = await this.partition(arr, low, high);
      await this.QuickSort(arr, low, pivotIndex - 1);
      await this.QuickSort(arr, pivotIndex + 1, high);
    }
  }

  async partition(arr: number[], low: number, high: number): Promise<number> {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      this.current_Comparison = [j, high];
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        this.current_Swap = [i, j];
        this.arrayToSort = [...arr];
        await new Promise(resolve => setTimeout(resolve, 6000 - this.speed));
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    this.current_Swap = [i + 1, high];
    this.arrayToSort = [...arr];
    await new Promise(resolve => setTimeout(resolve, 6000 - this.speed));

    this.current_Comparison = [];
    this.current_Swap = [];
    return i + 1;
  }

  async MergeSort(arr: number[], start: number, end: number): Promise<void> {
    if (start >= end) {
      return;
    }

    const mid = Math.floor((start + end) / 2);
    await this.MergeSort(arr, start, mid);
    await this.MergeSort(arr, mid + 1, end);
    await this.Merge(arr, start, mid, end);
  }

  async Merge(arr: number[], start: number, mid: number, end: number): Promise<void> {
    const temp = [];
    let leftIndex = start;
    let rightIndex = mid + 1;

    while (leftIndex <= mid && rightIndex <= end) {
      this.current_Comparison = [leftIndex, rightIndex];
      if (arr[leftIndex] <= arr[rightIndex]) {
        temp.push(arr[leftIndex]);
        leftIndex++;
      } else {
        temp.push(arr[rightIndex]);
        rightIndex++;
      }
      this.arrayToSort = [...arr];
      await new Promise(resolve => setTimeout(resolve, 6000 - this.speed));
    }

    while (leftIndex <= mid) {
      this.current_Comparison = [leftIndex];
      temp.push(arr[leftIndex]);
      leftIndex++;
      this.arrayToSort = [...arr];
      await new Promise(resolve => setTimeout(resolve, 6000 - this.speed));
    }

    while (rightIndex <= end) {
      this.current_Comparison = [rightIndex];
      temp.push(arr[rightIndex]);
      rightIndex++;
      this.arrayToSort = [...arr];
      await new Promise(resolve => setTimeout(resolve, 6000 - this.speed));
    }

    for (let i = 0; i < temp.length; i++) {
      arr[start + i] = temp[i];
      this.arrayToSort = [...arr];
      this.current_Swap = [start + i];
      await new Promise(resolve => setTimeout(resolve, 6000 - this.speed));
    }

    this.current_Comparison = [];
    this.current_Swap = [];
  }

  async startSorting(algo: string) {
    switch (algo) {
      case 'Bubble Sort':
        await this.BubbleSort(this.arrayToSort);
        break;
      case 'Selection Sort':
        await this.SelectionSort(this.arrayToSort);
        break;
      case 'Insertion Sort':
        await this.InsertionSort(this.arrayToSort);
        break;
      case 'Merge Sort':
        await this.MergeSort(this.arrayToSort, 0, this.arrayToSort.length - 1);
        break;
      case 'Quick Sort':
        await this.QuickSort(this.arrayToSort);
        break;
      default:
        console.error('Invalid algorithm:', algo);
    }
  }
}
