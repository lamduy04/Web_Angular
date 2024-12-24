import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {  OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

    
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [MatButtonModule,RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit {
  myChart!: Chart;

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    this.myChart = new Chart(ctx, {
      type: 'bar', // Loại biểu đồ (bar, line, pie, etc.)
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'], // Dữ liệu trục X
        datasets: [
          {
            label: 'Sales',
            data: [12, 19, 3, 5, 2], // Dữ liệu trục Y
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  }

