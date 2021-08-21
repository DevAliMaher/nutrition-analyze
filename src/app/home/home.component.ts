import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="flex flex-col items-center responsive-container gap-y-8">
      <h1 class="main-app-header">{{ 'welcome' | translate }}</h1>

      <p class="app-intro">{{ 'intro' | translate }}</p>

      <button
        mat-raised-button
        color="primary"
        type="button"
        routerLink="/analyze-meal"
      >
        {{ 'start-btn' | translate }}
      </button>
    </div>
  `,
})
export class HomeComponent {
  @HostBinding('class.app-flex-center') centerContent = true;
}
