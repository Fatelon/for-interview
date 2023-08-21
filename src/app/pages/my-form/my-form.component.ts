import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from '@common/chart/chart/chart.component';
import { Chart } from 'chart.js';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  standalone: true,
  selector: 'fi-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ChartComponent, DropdownModule],
})
export default class MyFormComponent {

  protected chartTypes: any = [
    { name: 'Bar', code: 'bar' },
    { name: 'Line', code: 'line' },
  ];

  protected selectedType = new FormControl(this.chartTypes[0]);

}

