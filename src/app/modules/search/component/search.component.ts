import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from './../search.service';
import { DataService } from './../../../shared/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../../../app.component.css']
})
export class SearchComponent {
  title = 'app';
  values: object = {};
  constructor(private searchService: SearchService, private dataService: DataService) {

  }
  getSearchData(f: NgForm) {
    this.values = {
      origin: f.value.from,
      destination: f.value.to,
      date: f.value.depart,
      passenger: f.value.passenger,
      fare: undefined || this.values.fare
    };
    this.searchService.getFlightSerchData(this.values).subscribe(data => {
      this.dataService.flightData(data);
    });
  }

  getFlightsByPrice(evnet, price) {
      const fare = { fare: price };
      Object.assign(this.values, fare);
      this.searchService.getFlightSerchData(this.values).subscribe(data => {
      this.dataService.flightData(data);
    });
  }
}
