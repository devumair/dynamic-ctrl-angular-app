import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
import { DataType } from '../data-type';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent extends DataType implements OnInit, OnChanges {
  @Output() onSelectedValueChanged = new EventEmitter<any>();

  private dropdownList: any;
  private selectedDropdownItem: any = {};

  constructor() {
    super();
  }

  ngOnInit() {
    this.setDropdownValue();
  }

  ngOnChanges() {
    this.setDropdownValue();
  }

  validate() {
    throw new Error('DropdownComponent: Method not implemented.');
  }

  setDropdownValue() {
    this.selectedDropdownItem = {
      Key: this.additionalField.FieldValue,
      Value: this.additionalField.FieldValue
    };
  }

  getDropdownValue() {
    this.additionalField.FieldValue = this.selectedDropdownItem.Value;
    this.onSelectedValueChanged.emit({
      changedKeyValue: this.selectedDropdownItem,
      aField: this.additionalField
    });
  }
}
