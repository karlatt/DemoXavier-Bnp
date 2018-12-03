import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InputRefDirective } from './directives/inputRef.directive';
import { LabelledInputComponent } from './labelled-input/labelled-input.component';
import { StepProgressComponent } from './step-progress/step-progress.component';
import { MaterialModule } from './material/material.module';
import { PickerCustomComponent } from './picker-custom/picker-custom.component';
import { SelectCustomComponent } from './select-custom/select-custom.component';
import { IbanInputComponent } from './iban-input/iban-input.component';
import { SearchAddressComponent } from './search-address/search-address.component';
import { InputWithCheckComponent } from './input-with-check/input-with-check.component';
import { ToggleLabelComponent } from './toggle-label/toggle-label.component';

@NgModule({
   declarations: [
      AppComponent,
      InputRefDirective,
      LabelledInputComponent,
      StepProgressComponent,
      PickerCustomComponent,
      SelectCustomComponent,
      IbanInputComponent,
      SearchAddressComponent,
      InputWithCheckComponent,
      ToggleLabelComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FlexLayoutModule,
      FlexModule,
      MaterialModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
export class AppModule { }
