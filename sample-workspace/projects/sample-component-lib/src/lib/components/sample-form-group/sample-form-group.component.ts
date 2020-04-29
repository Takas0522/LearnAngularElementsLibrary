import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SampleFormGroupService } from './sample-form-group.service';

export interface IAddress {
  zipcode: string;
  prefecture: string;
  city: string;
  town: string;
  otherAddress: string;
  roomNumber: string;
}


@Component({
  selector: 'scl-sample-form-group',
  templateUrl: './sample-form-group.component.html',
  styleUrls: ['./sample-form-group.component.scss'],
  providers: [
    SampleFormGroupService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SampleFormGroupComponent),
      multi: true
    }
  ]
})
export class SampleFormGroupComponent implements OnInit, ControlValueAccessor {

  formGroup: FormGroup = this.formBuilder.group({
    zipcode: ['', Validators.required],
    prefecture: ['', Validators.required],
    city: ['', Validators.required],
    town: ['', Validators.required],
    otherAddress: [''],
    roomNumber: [''],
  });

  private onChange = (data: IAddress) => {};
  private onTouched = () => {};

  constructor(
    private formBuilder: FormBuilder,
    private service: SampleFormGroupService
  ) { }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((data: IAddress) => {
      console.log(this.service.mergeAddress(data));
      this.onChange(data);
      this.onTouched();
    });
  }

  writeValue(obj: IAddress): void {
    this.formGroup.patchValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }

  submit(): void {}

}
