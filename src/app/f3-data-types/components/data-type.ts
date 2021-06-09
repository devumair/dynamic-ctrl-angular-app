import { Component, Input, OnDestroy } from '@angular/core';
import { AdditionalFieldsModel } from '../models/additional-fields';

@Component({
  template: ''
})
export abstract class DataType implements OnDestroy {
  @Input() ctrlId: string;
  @Input() additionalField: AdditionalFieldsModel | any;
  @Input() isForGrid: boolean;
  @Input() isViewOnly: boolean;
  @Input() workflowState: boolean;
  constructor() {}

  abstract validate(): void;

  ngOnDestroy(): void {
    this.isForGrid = undefined;
    this.workflowState = undefined;
    this.additionalField = undefined;
  }
}

export const DATATYPE_NAMESPACES = {
  StringLabel: 'System.StringLabel',
  String: 'System.String',
  Date: 'System.DateTime',
  Decimal: 'System.Decimal'
};
