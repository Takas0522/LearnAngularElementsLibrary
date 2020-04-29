import { NgModule } from '@angular/core';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { MaterialModule } from './modules/material/material.module';
import { SampleFormGroupComponent } from './components/sample-form-group/sample-form-group.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomButtonComponent,
    SampleFormGroupComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomButtonComponent,
    SampleFormGroupComponent
  ]
})
export class SampleComponentLibModule { }
