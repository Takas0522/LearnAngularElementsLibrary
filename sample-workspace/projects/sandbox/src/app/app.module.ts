import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SampleComponentLibModule } from 'sample-component-lib';
// import { SampleComponentLibModule } from '../../../sample-component-lib/src/lib/sample-component-lib.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SampleComponentLibModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
