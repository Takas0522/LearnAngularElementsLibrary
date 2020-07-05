import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LibSettingsComponent } from 'sample-component-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('settings')
  private settings: LibSettingsComponent;
  formGroup: FormGroup = this.formBuilder.group({
    address: [{}]
  });
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup.valueChanges.subscribe(v => {
      console.log('hoge');
      console.log(v);
    });
  }
  ngAfterViewInit(): void {
    this.settings.dummyStSet = 'aa';
    this.settings.setting = { userId: 'hoge', userName: 'boo', state: 'adad' };
  }



}
