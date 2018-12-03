import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Address {
  city: string;
  label: string;
}


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search-address',
  templateUrl: './search-address.component.html',
  styleUrls: ['./search-address.component.scss']
})
export class SearchAddressComponent implements OnInit {
  ngOnInit(): void {

  }

  // tslint:disable-next-line:member-ordering
  search: string;

  // tslint:disable:member-ordering
  apiUrl = `https://api-adresse.data.gouv.fr/search/?q=${this.search}&limit=15`;
  stateCtrl = new FormControl();

  filteredStates: Observable<Address[]>;

  states: Address[] = [
    {
      city: '13 Aix',
      label: '13,Boulevard de la république,AIX-EN-PROVENCE'
    },
    {
      city: '13 Aix',
      label: '13,Cours Mirabeau,AIX-EN-PROVENCE'
    },
    {
      city: '13 Aix',
      label: '13,Avenue des Arts et Métiers,AIX-EN-PROVENCE'
    },
    {
      city: '13 Aix',
      label: '13,Rue Campra , AIX-EN-PROVENCE'
    }

  ];

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  private _filterStates(value: string): Address[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.city.toLowerCase().indexOf(filterValue) === 0);
  }
}


