import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, FormGroup } from '@angular/forms';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { AnalyzeMealComponent } from './analyze-meal.component';

describe('AnalyzeMealComponent', () => {
  let component: AnalyzeMealComponent;
  let fixture: ComponentFixture<AnalyzeMealComponent>;
  let analyzeForm: FormGroup;
  let titleInput: AbstractControl;
  let ingredientsInput: AbstractControl;
  let submitBtn: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalyzeMealComponent],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        MatBottomSheetModule,
      ],
      providers: [
        TranslateService,
        { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
        { provide: MatBottomSheetRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeMealComponent);
    component = fixture.componentInstance;
    analyzeForm = component.analyzeForm;
    titleInput = analyzeForm.controls.title;
    ingredientsInput = analyzeForm.controls.ingredients;
    submitBtn = fixture.debugElement.query(By.css('.submit-btn')).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should fave title control', () => {
    titleInput = analyzeForm.controls.title;
    expect(titleInput.errors?.required).toBeTruthy();

    titleInput.setValue('Breakfast');
    expect(titleInput.errors).toBeNull();
  });

  it('form should fave ingredients control', () => {
    ingredientsInput = analyzeForm.controls.ingredients;
    expect(ingredientsInput.errors?.required).toBeTruthy();

    ingredientsInput.setValue('1 cup orange juice');
    expect(ingredientsInput.errors).toBeNull();
  });

  it('should form valid if title & ingredients values entered', () => {
    titleInput.setValue('Breakfast');
    ingredientsInput.setValue('1 cup orange juice');

    expect(analyzeForm.valid).toBeTruthy();
  });

  it('should check submitBtn is disabled before AnalyzeForm is valid', () => {
    analyzeForm.controls.title.hasError('require');
    analyzeForm.controls.ingredients.hasError('require');
    expect(submitBtn.disabled).toBeTruthy;
  });

  it('should check submitBtn is enabled after AnalyzeForm is valid', () => {
    analyzeForm.controls.title.setValue('Breakfast');
    analyzeForm.controls.ingredients.setValue('1 cup orange juice');
    fixture.detectChanges();
    expect(submitBtn.disabled).toBeFalsy;
  });
});
