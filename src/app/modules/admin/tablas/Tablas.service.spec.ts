/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TablasService } from './Tablas.service';

describe('Service: Tablas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TablasService]
    });
  });

  it('should ...', inject([TablasService], (service: TablasService) => {
    expect(service).toBeTruthy();
  }));
});
