import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'lib-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule],
})
export class SimpleButtonComponent {
  @Input() public label: string | undefined;
}
