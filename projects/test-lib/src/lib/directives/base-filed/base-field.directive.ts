import { Directive, inject, Input, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  NgControl,
  ValidationErrors,
  Validator,
  ValidatorFn
} from '@angular/forms';

import { filter, pairwise, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';


type TValidateFunction = () => void;
type TPropagateFunction<T> = (propagateValue: T) => void;

@Directive()
export class BaseFieldDirective<
  FieldValue = unknown,
  FieldError extends ValidationErrors = ValidationErrors,
> implements OnInit, ControlValueAccessor, Validator, OnDestroy {

  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  @Input() public valueControl: FormControl<FieldValue | null> = this.formBuilder.nonNullable.control(null);

  public readonly destroy$ = new Subject<void>;

  public validateChange: TValidateFunction = (): void => {};
  public propagateTouched: TPropagateFunction<FieldValue> = <T>(propagateValue: T): void => {};
  public propagateChange: TPropagateFunction<FieldValue> = <T>(propagateValue: T): void => {};

  protected constructor(validators: ValidatorFn[] = [] as ValidatorFn[]) {
    this.initValidators(validators);
  }

  public ngOnInit(): void {
    this.initValueChanges();
  }

  public readonly writeValue = (value: FieldValue): void => this.valueControl.setValue(value);

  public readonly validate = (control: AbstractControl): FieldError | null => control.errors as FieldError;

  public readonly registerOnTouched = (fn: TPropagateFunction<FieldValue>): void => { this.propagateTouched = fn; };

  public readonly registerOnChange = (fn: TPropagateFunction<FieldValue>): void => { this.propagateChange = fn };

  public readonly registerOnValidatorChange = (fn: TValidateFunction): void => { this.validateChange = fn };

  public readonly setDisabledState = (isDisabled: boolean): void => isDisabled ? this.valueControl.disable() : this.valueControl.enable();

  private readonly initValidators = (validators: ValidatorFn[]): void => this.valueControl.setValidators(validators);

  private initValueChanges(): void {
    this.valueControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      pairwise(),
      filter(([oldValue, newValue]) => oldValue !== newValue),
      map(([_, newValue]) => newValue),
      filter(newValue => newValue !== null),
    ).subscribe(newValue => {
        this.propagateChange(newValue as FieldValue);
      }
    );
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
