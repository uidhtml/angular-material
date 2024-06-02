import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_INPUT_VALUE_ACCESSOR,
  MatInput,
  MatInputModule,
} from '@angular/material/input';
import { CustomErrorStateMatcher } from '../custom-error-state-matcher';
import { MatInputCommifiedDirective } from './custom-input.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uidhtml-input',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputCommifiedDirective,
  ],
  templateUrl: './uidhtml-input.component.html',
  styleUrl: './uidhtml-input.component.scss',
  providers: [
    { provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher },
  ],
})
export class UidhtmlInputComponent {
  usernameVal = '';

  @ViewChild('password', { static: true }) password!: MatInput;

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  resetForm() {
    this.form.reset();
  }
}
