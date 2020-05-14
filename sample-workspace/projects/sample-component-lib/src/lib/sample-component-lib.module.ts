import { NgModule } from '@angular/core';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { MaterialModule } from './modules/material/material.module';
import { SampleFormGroupComponent } from './components/sample-form-group/sample-form-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterPageComponent } from './components/router-page/router-page.component';
import { Sub1Component } from './components/router-page/sub1/sub1.component';
import { Sub2Component } from './components/router-page/sub2/sub2.component';
import { BlankComponent } from './components/router-page/blank/blank.component';
import { CustomLibRoutingModule } from './custom-lib-routing.module';

@NgModule({
  declarations: [
    CustomButtonComponent,
    SampleFormGroupComponent,
    RouterPageComponent,
    Sub1Component,
    Sub2Component,
    BlankComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CustomLibRoutingModule
  ],
  exports: [
    CustomButtonComponent,
    SampleFormGroupComponent,
    RouterPageComponent
  ]
})
export class SampleComponentLibModule { }
