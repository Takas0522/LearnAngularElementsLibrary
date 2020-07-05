import { Component, OnInit, Input } from '@angular/core';
import { LibStateService } from '../../services/lib-state.service';

@Component({
  selector: 'scl-lib-settings',
  template: '<div>YEAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!!{{dummySt}}</div>',
  styleUrls: ['./lib-settings.component.css']
})
export class LibSettingsComponent implements OnInit {

  dummySt = 'dd';
  @Input()
  set dummyStSet(val: string) {
    console.log('em')
    this.dummySt = val;
  }

  constructor(
    private service: LibStateService
  ) { }

  ngOnInit(): void {
  }

  @Input()
  set setting(setting: { state: string, userId: string, userName: string }) {
    console.log('emit');
    this.service.setting(setting);
    console.log(this.service.state);
    this.dummyStSet = 'emit';
  }
}
