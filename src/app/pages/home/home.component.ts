import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface ISimpleTestForm {
  userName: FormControl<string | null>;
  userEmail: FormControl<string | null>;
}

@Component({
  standalone: true,
  selector: 'fi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
  ],
})
export default class HomeComponent {
  protected readonly formBuilder: FormBuilder = inject(FormBuilder);

  protected simpleFormGroup: FormGroup<ISimpleTestForm> = this.formBuilder.group({
    userName: new FormControl<string>('', [Validators.required]),
    userEmail: new FormControl<string>('', [Validators.required, Validators.email]),
  });

  protected flag = true;

  protected get userNameControl() {
    return this.simpleFormGroup.controls.userName;
  }

  protected get userEmailControl() {
    return this.simpleFormGroup.controls.userEmail;
  }

  protected onSave(): void {
    console.log('Save user data', this.simpleFormGroup.value);
  }
}
