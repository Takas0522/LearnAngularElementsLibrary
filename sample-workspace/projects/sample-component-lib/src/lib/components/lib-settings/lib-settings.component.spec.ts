import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSettingsComponent } from './lib-settings.component';

describe('LibSettingsComponent', () => {
  let component: LibSettingsComponent;
  let fixture: ComponentFixture<LibSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
