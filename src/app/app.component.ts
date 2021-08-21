import { merge, Observable } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';
import {
  AppDirType,
  AppLangType,
  AppThemeType,
} from 'src/app/core/models/app-states.model';
import {
  LangToggleAction,
  ThemeToggleAction,
} from 'src/app/core/states/app.actions';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-root',
  template: `
    <mat-progress-bar
      *ngIf="loading$ | async"
      mode="query"
      color="accent"
      class="z-50 fixed top-0 left-0 right-0"
    ></mat-progress-bar>

    <app-header
      (toggleLang)="onToggleLang($event)"
      (toggleSideNav)="sideNav.toggle()"
      (toggleTheme)="onToggleTheme($event)"
    ></app-header>

    <mat-sidenav-container class="app-main-container">
      <mat-sidenav #sideNav class="material-side-nav">
        <app-side-nav (closeNav)="sideNav.toggle()"></app-side-nav>
      </mat-sidenav>
      <mat-sidenav-content>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('sideNav') sideNav: MatSidenav = {} as MatSidenav;
  loading$!: Observable<boolean>;
  private loadingStart$!: Observable<boolean>;
  private loadingEnd$!: Observable<boolean>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.loadingStart$ = this.router.events.pipe(
      filter((event) => event instanceof ResolveStart),
      mapTo(true)
    );

    this.loadingEnd$ = this.router.events.pipe(
      filter((event) => event instanceof ResolveEnd),
      mapTo(false)
    );

    this.loading$ = merge(this.loadingStart$, this.loadingEnd$);
  }

  // toggle theme
  onToggleTheme(theme: AppThemeType): void {
    this.store.dispatch(new ThemeToggleAction(theme));
  }

  // toggle lang and direction
  onToggleLang(lang: AppLangType): void {
    const dir: AppDirType = lang === 'ar' ? 'rtl' : 'ltr';
    this.store.dispatch(new LangToggleAction(lang, dir));
  }
}
