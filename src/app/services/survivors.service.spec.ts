import { TestBed } from '@angular/core/testing';

import { SurvivorsService } from './survivors.service';

describe('SurvivorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurvivorsService = TestBed.get(SurvivorsService);
    expect(service).toBeTruthy();
  });
});
