import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'select-custom',
  templateUrl: './select-custom.component.html',
  styleUrls: ['./select-custom.component.scss']
})
export class SelectCustomComponent implements OnInit {

  items: ItemSelect[] = [
    { value: 'euro-0', viewValue: 'EUR' },
    { value: 'dollar-1', viewValue: '$' },
    { value: 'livre-sterling-2', viewValue: 'PND' }
  ];
  constructor() { }

  @Input() placeHolder: string;
  ngOnInit() {
  }

}

export interface ItemSelect {
  value: string;
  viewValue: string;
}

