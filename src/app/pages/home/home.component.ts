import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { SimpleTextComponent } from 'test-lib';


interface ISimpleTestForm {
  userName: FormControl<string | null>;
  useremail: FormControl<string | null>;
}

@Component({
  standalone: true,
  selector: 'fi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule, SimpleTextComponent,
  ],
})
export default class HomeComponent {
  protected readonly formBuilder: FormBuilder = inject(FormBuilder);

  protected simpleFormGroup: FormGroup<ISimpleTestForm> = this.formBuilder.group({
    userName: new FormControl<string>('', [Validators.required]),
    useremail: new FormControl<string>('', [Validators.required, Validators.email]),
  });
}
