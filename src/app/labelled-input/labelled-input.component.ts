import { Component, OnInit, Input, ContentChild, HostBinding } from '@angular/core';
import { InputRefDirective } from '../directives/inputRef.directive';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Component({

  // tslint:disable-next-line:component-selector
  selector: 'labelled-input',
  templateUrl: './labelled-input.component.html',
  styleUrls: ['./labelled-input.component.scss']
})
export class LabelledInputComponent implements OnInit {

  @Input() labelContent = '';

  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  @HostBinding('class.focus')
  get focus() {
    return this.input ? this.input.focus : false;
  }

  ngOnInit() {
  }

}
