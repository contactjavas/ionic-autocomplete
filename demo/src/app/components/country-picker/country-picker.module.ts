import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {AutoCompleteModule} from 'ionic-autocomplete';

import {CountryPickerComponent} from './country-picker.component';

import {PeopleService} from '../../services/people.service';

@NgModule({
  declarations: [
    CountryPickerComponent
  ],
  entryComponents: [
    CountryPickerComponent
  ],
  exports: [
    CountryPickerComponent
  ],
  imports: [
    AutoCompleteModule,
    CommonModule,
    FormsModule,
    IonicModule
  ],
  providers: [
    PeopleService
  ]
})
export class CountryPickerModule {}
