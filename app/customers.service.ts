import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor() {}

  getCustomers(): Observable<any[]> {
    return of([
      {
        name: 'Custmer 1',
        platform: 'Platform 1',
        country: 'Country 1',
        geo: 'A',
      },
      {
        name: 'Custmer 2',
        platform: 'Platform 2',
        country: 'Country 1',
        geo: 'A',
      },
      {
        name: 'Custmer 2',
        platform: 'Platform 3',
        country: 'Country 1',
        geo: 'A',
      },
      {
        name: 'Custmer 3',
        platform: 'Platform 1',
        country: 'Country 2',
        geo: 'A',
      },
      {
        name: 'Custmer 4',
        platform: 'Platform 2',
        country: 'Country 3',
        geo: 'B',
      },
      {
        name: 'Custmer 5',
        platform: 'Platform 3',
        country: 'Country 2',
        geo: 'A',
      },
      {
        name: 'Custmer 6',
        platform: 'Platform 4',
        country: 'Country 1',
        geo: 'A',
      },
      {
        name: 'Custmer 7',
        platform: 'Platform 5',
        country: 'Country 4',
        geo: 'B',
      },
    ]);
  }
}
