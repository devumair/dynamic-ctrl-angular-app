import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  ViewChild
} from '@angular/core';
import { DataType, DATATYPE_NAMESPACES } from '../data-type';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent extends DataType implements OnInit, OnChanges {
  // @Input() placeholder: string;
  // @Input() type: 'simple' | 'places' | 'distance';

  @ViewChild('textbox') textbox: ElementRef;

  textValue: string;

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
    switch (this.additionalField.DataType) {
      case DATATYPE_NAMESPACES.String:
      case DATATYPE_NAMESPACES.Date:
        this.textValue = this.additionalField.FieldValue
          ? this.additionalField.FieldValue
          : '';
        break;

      case DATATYPE_NAMESPACES.Decimal:
        this.textValue = this.additionalField.FieldValue
          ? parseFloat(this.additionalField.FieldValue).toString()
          : '0';
        break;
    }
  }

  private getControlValue() {
    switch (this.additionalField.DataType) {
      case DATATYPE_NAMESPACES.String:
      case DATATYPE_NAMESPACES.Date:
        this.additionalField.FieldValue = this.textValue;
        break;

      case DATATYPE_NAMESPACES.Decimal:
        this.additionalField.FieldValue = parseFloat(this.textValue).toString();
        break;
    }
  }

  onTextChange(event: any) {
    this.textValue = event;
    this.getControlValue();
  }

  handleAddressChange(event) {
    this.textValue = event.formatted_address;
    this.getControlValue();
  }
}
