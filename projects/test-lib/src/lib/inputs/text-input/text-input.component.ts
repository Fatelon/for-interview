import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnDestroy, Optional, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validator } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

import { Subscription } from 'rxjs';


@Component({
  standalone: true,
  selector: 'lib-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ NgIf, ReactiveFormsModule, InputTextModule ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor, Validator, OnDestroy {
  @Input() label = '';
  @Input() placeholder = '';

  valueControl = new FormControl('');

  propagateChange = (_: any) => {};
  propagateTouched = () => {};
  subscription: Subscription | undefined;

  constructor() {}

  writeValue(value: any): void {
    this.valueControl.setValue(value);
    this.propagateChange(value);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  validate() {
    return this.valueControl.invalid ? { invalid: true } : null;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.valueControl.disable() : this.valueControl.enable();
  }

  onInputChange(value: any) {
    this.valueControl.setValue(value);
    this.propagateChange(value);
  }

  onInputBlur() {
    this.propagateTouched();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
