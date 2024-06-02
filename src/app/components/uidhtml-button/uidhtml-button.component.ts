import { A11yModule, FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { Component, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_BUTTON_CONFIG,
  MAT_FAB_DEFAULT_OPTIONS,
  MatButtonModule,
} from '@angular/material/button';

@Component({
  selector: 'app-uidhtml-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, A11yModule],
  templateUrl: './uidhtml-button.component.html',
  styleUrl: './uidhtml-button.component.scss',
  providers: [
    {
      provide: MAT_BUTTON_CONFIG,
      useValue: {
        disabledInteractive: true,
      },
    },
    {
      provide: MAT_FAB_DEFAULT_OPTIONS,
      useValue: {
        color: 'primary',
      },
    },
  ],
})
export class UidhtmlButtonComponent {
  buttonColor: string = 'primary';

  constructor(private focusMonitor: FocusMonitor, private elmRef: ElementRef) {}

  ngOnInit() {
    this.focusMonitor
      .monitor(this.elmRef.nativeElement, true)
      .subscribe((origin: FocusOrigin) => {
        console.log(origin);
      });
  }
}
