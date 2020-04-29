import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { SampleComponentLibModule } from 'sample-component-lib';
import { CustomButtonComponent, SampleFormGroupComponent } from 'sample-component-lib';

@NgModule({
  imports: [
    BrowserModule,
    SampleComponentLibModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const buttonElement = createCustomElement(CustomButtonComponent, { injector: this.injector });
    customElements.define('scl-custom-button', buttonElement);

    const formElement = createCustomElement(SampleFormGroupComponent, { injector: this.injector });
    customElements.define('scl-sample-form-group', formElement);
  }
}
