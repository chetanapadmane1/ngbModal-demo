import { TestBed } from '@angular/core/testing';

import { ModaldemoService } from './modaldemo.service';

describe('ModaldemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModaldemoService = TestBed.get(ModaldemoService);
    expect(service).toBeTruthy();
  });
});
