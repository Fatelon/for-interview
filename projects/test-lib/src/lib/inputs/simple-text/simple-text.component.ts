import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  standalone: true,
  selector: 'lib-simple-text',
  templateUrl: './simple-text.component.html',
  styleUrls: ['./simple-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    InputTextModule,
  ]
})
export class SimpleTextComponent {

}
