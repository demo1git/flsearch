import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class DataService {
  data$: Observable<any>;
  private dataSubject = new Subject<any>();

  constructor() {
    this.data$ = this.dataSubject.asObservable();
  }

  flightData(data) {
    // we can do stuff with data if we want
    this.dataSubject.next(data);
  }
}
