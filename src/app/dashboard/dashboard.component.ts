import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: []
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('statsChart') statsChartRef!: ElementRef;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const ctx = this.statsChartRef.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['En attente', 'Présélection', 'Entretiens', 'Embauches'],
          datasets: [{
            data: [120, 45, 30, 15],
            backgroundColor: ['#4ECDC4', '#2A2E4D', '#FF6B6B', '#FFD700']
          }]
        },
        options: {
          plugins: {
            legend: { position: 'bottom' }
          }
        }
      });
    }

    // Animation des barres de progression
    const bars = document.querySelectorAll('.progress-fill') as NodeListOf<HTMLElement>;
    bars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 500);
    });
  }

  onViewAnnonce(): void {
    this.router.navigateByUrl('annonce');
  }

  ajoutNouvelleOffre(): void {
    this.router.navigateByUrl('ajout_offre');
  }
}
