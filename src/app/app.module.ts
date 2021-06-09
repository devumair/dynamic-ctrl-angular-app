import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { F3DataTypesModule } from './f3-data-types/f3-data-type.module';

@NgModule({
  imports: [BrowserModule, FormsModule, F3DataTypesModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
