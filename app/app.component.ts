import { ViewChildren, Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { FilterComponent } from './filter/filter.component';
import { tap, map, startWith } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {
  filteredCustomers: Observable<any[]>;
  filters: string[]= ['platform', 'country','geo'];
  @ViewChildren(FilterComponent) fc;
  constructor(public c: CustomersService) {

  }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    setTimeout( _ => {
    this.filteredCustomers = 
    combineLatest(
      this.c.getCustomers(),
    combineLatest(
        this.fc.map(f => 
            f.selectionChange.pipe(
                startWith(new Set()),
                map(selected => {
                    return {
                        property: f.property, 
                        values: selected
                    }
                })))).pipe(
        map((res:any[]) => {
          const ret = {};
          res.forEach( e => ret[e.property] = e.values)
          return ret
        }))).pipe(
          map( ([customers, filters]) => 
            customers.filter( c => 
              Object.keys(filters).every(k => 
                filters[k].size == 0 || filters[k].has(c[k])
              )
            )
          ),
          tap( c => console.log(c))
        )
              })        
        //.subscribe(v => console.log(v))
  }
}

