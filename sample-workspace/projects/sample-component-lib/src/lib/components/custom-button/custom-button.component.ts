import { Component, OnInit } from '@angular/core';
import { LibStateService } from '../../services/lib-state.service';

@Component({
  selector: 'scl-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {

  state = '';
  constructor(
    private service: LibStateService
  ) { }

  ngOnInit(): void {
    this.state = this.service.state;
  }

  clickButton() {
    alert(this.service.state);
  }

}
