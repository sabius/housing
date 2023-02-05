import { Component } from '@angular/core';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.scss']
})

export class HousingListComponent {
  count: number;

  constructor() {
    this.count = 0;
  }

  ngOnInit(): void {

  }

  searchHousingLocations(searchText: string) {
    this.count++;
    console.log(`${searchText} ${this.count}`);
  }
}
