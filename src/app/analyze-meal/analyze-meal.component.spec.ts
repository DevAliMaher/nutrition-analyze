import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeMealComponent } from './analyze-meal.component';

describe('AnalyzeMealComponent', () => {
  let component: AnalyzeMealComponent;
  let fixture: ComponentFixture<AnalyzeMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzeMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
