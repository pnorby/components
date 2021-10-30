import { TestBed } from '@angular/core/testing';

import { SlackNTellService } from './slack-ntell.service';

describe('SlackNTellService', () => {
  let service: SlackNTellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlackNTellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
