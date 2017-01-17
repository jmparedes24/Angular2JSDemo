import { Component, OnInit } from '@angular/core';
import { Data } from './data';
import { DataService } from './data.service';

@Component({
  selector: 'data-list',
  templateUrl: 'app/data-list-component.html'
})
export class DataListComponent implements OnInit{
  allData: Data[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private dataService : DataService){ }

  ngOnInit(){
    this.dataService
      .getAll()
      .subscribe(
         /* happy path */ d => this.allData = d,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }
}
