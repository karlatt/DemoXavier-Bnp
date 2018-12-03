import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-with-check',
  templateUrl: './input-with-check.component.html',
  styleUrls: ['./input-with-check.component.scss']
})
export class InputWithCheckComponent implements OnInit {

  constructor() { }

  disabled = false;
  ngOnInit() {

  }

}
