import { TestBed } from '@angular/core/testing';

import { SampleFormGroupService } from './sample-form-group.service';

describe('SampleFormGroupService', () => {
  let service: SampleFormGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleFormGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
