import { HintsComponent } from 'src/app/analyze-meal/hints/hints.component';
import { InputModel } from 'src/app/core/models/input.model';

import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analyze-meal',
  templateUrl: './analyze-meal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalyzeMealComponent {
  @HostBinding('class.app-flex-center') centerContent = true;
  analyzeForm = new FormGroup({
    title: new FormControl('', Validators.required),
    ingredients: new FormControl('', Validators.required),
  });

  title: InputModel = {
    control: this.analyzeForm.controls.title as FormControl,
    placeholder: 'title-placeholder',
    error: 'title-errors',
  };
  ingredients: InputModel = {
    control: this.analyzeForm.controls.ingredients as FormControl,
    placeholder: 'ingredients-placeholder',
    error: 'ingredients-errors',
  };

  constructor(private bottomSheet: MatBottomSheet, private router: Router) {}

  openHints(): void {
    this.bottomSheet.open(HintsComponent);
    this.analyzeForm.enable();
  }

  onSubmitForm(): void {
    const title = this.analyzeForm.value.title.trim();
    const ingr = this.analyzeForm.value.ingredients.trim();
    const path = `summary?title=${title}&ingr=${ingr}`;
    this.analyzeForm.disable();
    this.router.navigateByUrl(path);
  }
}
