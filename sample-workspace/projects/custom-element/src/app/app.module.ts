import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { SampleComponentLibModule } from 'sample-component-lib';
import { CustomButtonComponent, SampleFormGroupComponent, LibSettingsComponent } from 'sample-component-lib';
import { RouterPageComponent } from 'projects/sample-component-lib/src/public-api';

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

    const routerElement = createCustomElement(RouterPageComponent, { injector: this.injector });
    customElements.define('scl-router-page', routerElement);

    const strategyFactory = new ElementZoneStrategyFactory(LibSettingsComponent, this.injector);
    const settingsElement = createCustomElement(LibSettingsComponent, { injector: this.injector, strategyFactory });
    customElements.define('scl-lib-settings', settingsElement);
  }
}
