import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFormGroupComponent } from './sample-form-group.component';

describe('SampleFormGroupComponent', () => {
  let component: SampleFormGroupComponent;
  let fixture: ComponentFixture<SampleFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
