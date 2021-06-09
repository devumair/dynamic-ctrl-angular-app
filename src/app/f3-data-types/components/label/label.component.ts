import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DataType } from '../data-type';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent extends DataType implements OnInit, OnChanges {
  @Input() textValue: string;

  constructor() {
    super();
  }

  validate() {}

  ngOnInit() {
    this.setControlValue();
  }

  ngOnChanges() {
    this.setControlValue();
  }

  private setControlValue() {
    this.textValue = this.additionalField.FieldValue
      ? this.additionalField.FieldValue
      : '';
  }
}
