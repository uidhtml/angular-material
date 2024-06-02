import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UidhtmlButtonComponent } from './components/uidhtml-button/uidhtml-button.component';
import { UidhtmlInputComponent } from './components/uidhtml-input/uidhtml-input.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatButtonModule,
    UidhtmlButtonComponent,
    UidhtmlInputComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'material-design';
}
