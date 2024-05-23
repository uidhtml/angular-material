import { Component, ElementRef, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  MAT_BUTTON_CONFIG,
  MAT_FAB_DEFAULT_OPTIONS,
  MatButtonModule,
} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { A11yModule, FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatIconModule, A11yModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
export class AppComponent implements OnInit {
  title = 'material-design';
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
