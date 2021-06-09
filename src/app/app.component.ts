import { Component, VERSION } from '@angular/core';
import { DATATYPE_NAMESPACES } from './f3-data-types/components/data-type';
import { ConfigDataSource } from './_base/config-datasource';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  configData = ConfigDataSource;
  configDataType = DATATYPE_NAMESPACES;
}
