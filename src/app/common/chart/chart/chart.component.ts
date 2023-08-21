import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import Chart, { ChartData, ChartOptions, ChartType } from 'chart.js/auto';


@Component({
  selector: 'fi-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit {
  @Input() selectedChartType: ChartType = 'bar';

  chart: Chart | undefined;
  chartData: ChartData;
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false // Ensure responsiveness
  };

  canvas: any;
  ctx: any;

  constructor() {
    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    };
  }

  ngOnInit(): void {
    this.canvas = document.getElementById('chartCanvas') as HTMLCanvasElement;
    this.ctx = this.canvas?.getContext('2d');
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', this.selectedChartType);
    if (this.chart) {
      this.chart.destroy();
    }
    this.createChart();
  }

  private createChart() {
    if (!this.ctx) {
      return;
    }
    this.chart = new Chart(this.ctx, {
      type: this.selectedChartType,
      data: this.chartData,
      options: this.chartOptions
    });
  }
}



