import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [AppService]
})


export class AppComponent implements OnInit{
  formControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  breedSelected: string = '';
  filteredLength: number = 0;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.loadOptions();
  }

  private loadOptions() {
    this.appService.getAllBreeds().subscribe(res => {
      if (res) {
        for (let i: number = 0; i < res['data'].length; i++) {
          this.options.push(res['data'][i]['name']);
        }

        this.options.unshift('Unknow');
        this.options.push('Other');

        this.filteredOptions = this.formControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this.filterBreedOption(value))
          );
      }
    });
  }

  private filterBreedOption(value: string): string[] {
    const filterValue = value.toLowerCase();
    const filterOptions = Object.assign([], this.options);

    filterOptions.pop();
    filterOptions.shift();

    const result = filterOptions.filter(option => option.toLowerCase().includes(filterValue));

    result.push('Other');
    result.unshift('Unknow');

    this.filteredLength = result.length;

    return result;
  }

  private keyUpHandle() {
    if (this.filteredLength < 3 && this.breedSelected !== '') {
      this.appService.insertBreed(this.breedSelected).subscribe(res => {
        if (res) {
          alert("Insert new breed successfully");
          this.breedSelected = '';
          this.loadOptions();
        }
      });
    }
  }
}
