import { Component, Input, } from '@angular/core';
import { DataService } from './../../../shared/services/data.service';
import { FlightDetails } from '../model/flight-details';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css', '../../../app.component.css']
})
export class FlightDetailComponent {

  @Input() flightDetail: FlightDetails[];
  constructor() {

  }
  title = 'app';
}
