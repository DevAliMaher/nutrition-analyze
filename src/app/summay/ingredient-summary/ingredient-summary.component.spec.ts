import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { IngredientSummaryComponent } from './ingredient-summary.component';

describe('IngredientSummaryComponent', () => {
  let component: IngredientSummaryComponent;
  let fixture: ComponentFixture<IngredientSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngredientSummaryComponent],
      imports: [TranslateModule.forRoot()],
      providers: [TranslateService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
