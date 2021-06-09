import { Component, OnChanges, OnInit } from '@angular/core';
import { DataType } from '../data-type';

export const DATE_FORMAT = 'MM/dd/yyyy';
export const MONTH_NAMES = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12'
];

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent extends DataType implements OnInit, OnChanges {
  selectedDate: Date;
  datePickerFormat = DATE_FORMAT;

  constructor() {
    super();
  }

  validate() {}

  ngOnInit() {
    this.setDateFromFormatted();
  }

  ngOnChanges() {
    this.setDateFromFormatted();
  }

  onDateChange(event: any) {
    if (event) {
      this.selectedDate = new Date(event.toDateString());
      this.additionalField.FieldValue =
        this.convertToCustomFormat(this.selectedDate, 'yyyy-MM-dd') +
        'T00:00:00.000';
    } else {
      this.selectedDate = null;
      this.additionalField.FieldValue = '';
    }
  }

  private setDateFromFormatted() {
    if (this.additionalField.FieldValue) {
      this.selectedDate = new Date(this.additionalField.FieldValue);
    }
  }

  getFormattedDate() {
    if (this.selectedDate) {
      return this.convertToCustomFormat(
        this.selectedDate,
        this.datePickerFormat
      );
    }
  }

  private convertToCustomFormat(paramDateValue: any, format = '') {
    if (paramDateValue == null || paramDateValue == '') {
      return '';
    }

    let dateValue: any;
    if (Object.prototype.toString.call(paramDateValue) === '[object Date]') {
      dateValue = paramDateValue;
    } else {
      dateValue = new Date(paramDateValue);
    }

    const day =
      dateValue.getDate().toString().length !== 2
        ? '0' + dateValue.getDate()
        : dateValue.getDate();
    const month_index = dateValue.getMonth();
    const year = dateValue.getFullYear();

    let dateString = '';
    if (format == 'yyyy-MM-dd') {
      dateString = '' + year + '-' + MONTH_NAMES[month_index] + '-' + day;
    } else if (format == 'MM/DD/YYYY') {
      dateString = '' + MONTH_NAMES[month_index] + '/' + day + '/' + year;
    } else if (format == DATE_FORMAT) {
      dateString = '' + day + '/' + MONTH_NAMES[month_index] + '/' + year;
    } else {
      dateString = '' + day + '/' + MONTH_NAMES[month_index] + '/' + year;
    }
    return dateString;
  }
}
