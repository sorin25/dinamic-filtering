import { EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { map} from 'rxjs/operators';
import { CustomersService } from '../customers.service';
import * as _ from 'lodash'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() property: string;
  @Output() selectionChange: EventEmitter<Set<string>> = new EventEmitter<Set<string>>();

  selected = new Set<string>();
  values$: Observable<string[]>;

  constructor(private customers:CustomersService) {
   }

  ngOnInit() {
    this.values$ = this.customers.getCustomers().pipe(
      map( c => _.uniq(c.map(r => r[this.property])))
    )
  }

  changed($event:any) {
    const id  = $event.target.id;
    const checked = $event.target.checked;
    this.selected[checked ? 'add':'delete'](id)
    this.selectionChange.next(this.selected)
  }

}