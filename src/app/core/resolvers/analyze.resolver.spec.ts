import { TestBed } from '@angular/core/testing';

import { AnalyzeResolver } from './analyze.resolver';

describe('AnalyzeResolver', () => {
  let resolver: AnalyzeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AnalyzeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
