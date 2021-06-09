import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateComponent } from './components/date/date.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { LabelComponent } from './components/label/label.component';
import { TextboxComponent } from './components/textbox/textbox.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    DateComponent,
    DropdownComponent,
    LabelComponent,
    TextboxComponent
  ],
  exports: [DateComponent, TextboxComponent, DropdownComponent, LabelComponent]
})
export class F3DataTypesModule {}
