import { Routes } from '@angular/router';
import { UidhtmlInputComponent } from './components/uidhtml-input/uidhtml-input.component';
import { UidhtmlButtonComponent } from './components/uidhtml-button/uidhtml-button.component';
import { UidhtmlIconComponent } from './components/uidhtml-icon/uidhtml-icon.component';

export const routes: Routes = [
  { path: 'input-component', component: UidhtmlInputComponent },
  { path: 'button-component', component: UidhtmlButtonComponent },
  { path: 'icon-component', component: UidhtmlIconComponent },
  {
    path: '',
    redirectTo: '/button-component',
    pathMatch: 'full',
  },
];
