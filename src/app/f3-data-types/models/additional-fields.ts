class AdditionalFieldsClientModel {
  isVisibleColumn: boolean;
  IsInvalid: boolean;
}

export class AdditionalFieldsModel extends AdditionalFieldsClientModel {
  DataType: string;
  FieldKey: string;
  FieldName: string;
  FieldValue: string | any;
  IsMandatory: boolean;
  IsReadOnly: boolean;
  IsVisible: boolean;
  MetaType: string;
  MetaValues: any[];
  ValidationMessage: string;
}
