import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'lib-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule],
})
export class SimpleButtonComponent {
  @Input() public label: string | undefined;

  @Output() public btnClick: EventEmitter<unknown> = new EventEmitter();

  protected onClick(): void {
    this.btnClick.emit();
  }
}
