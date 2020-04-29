import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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

}
