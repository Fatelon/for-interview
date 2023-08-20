import { forwardRef, Type } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

export const provideNgValueAccessor = <T>(component: Type<T>) => ({
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef((): Type<T> => component),
  multi: true,
});

export const provideNgValueValidators = <T>(component: Type<T>) => ({
  provide: NG_VALIDATORS,
  useExisting: forwardRef((): Type<T> => component),
  multi: true,
});
