import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientSummaryComponent } from './ingredient-summary.component';

describe('IngredientSummaryComponent', () => {
  let component: IngredientSummaryComponent;
  let fixture: ComponentFixture<IngredientSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientSummaryComponent ]
    })
    .compileComponents();
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
