import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';

import { BaseFieldDirective, provideNgValueAccessor } from '../../directives';

@Component({
  standalone: true,
  selector: 'lib-simple-text',
  templateUrl: './simple-text.component.html',
  styleUrls: ['./simple-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InputTextModule, ReactiveFormsModule],
  providers: [provideNgValueAccessor(SimpleTextComponent)],
})
export class SimpleTextComponent extends BaseFieldDirective {

  constructor() {
    super();
  }
}
