import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {AutoCompleteModule} from 'ionic-autocomplete';

import {SimpleServiceComponent} from './simple-service.component';

import {CountryService} from '../../services/country.service';

@NgModule({
  declarations: [
    SimpleServiceComponent
  ],
  entryComponents: [
    SimpleServiceComponent
  ],
  exports: [
    SimpleServiceComponent
  ],
  imports: [
    AutoCompleteModule,
    CommonModule,
    FormsModule,
    IonicModule
  ],
  providers: [
    CountryService
  ]
})
export class SimpleServiceModule {}
