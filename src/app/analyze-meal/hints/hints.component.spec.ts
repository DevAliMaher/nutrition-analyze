import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatBottomSheetModule,
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { HintsComponent } from './hints.component';

describe('HintsComponent', () => {
  let component: HintsComponent;
  let fixture: ComponentFixture<HintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HintsComponent],
      imports: [MatBottomSheetModule, TranslateModule.forRoot()],
      providers: [
        TranslateService,
        { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
        { provide: MatBottomSheetRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
