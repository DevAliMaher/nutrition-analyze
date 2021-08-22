import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { SummayComponent } from './summay.component';

describe('SummayComponent', () => {
  let component: SummayComponent;
  let fixture: ComponentFixture<SummayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummayComponent],
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      providers: [TranslateService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
