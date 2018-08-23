import { Component } from '@angular/core';
import { DataService } from './shared/services/data.service';
import { FlightDetails } from './modules/flight-details/model/flight-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  flightDetails: FlightDetails[];

  constructor(private dataService: DataService) {
    this.dataService.data$.subscribe(data => {
      this.flightDetails = undefined;
      this.flightDetails = data;
    });
  }
}
