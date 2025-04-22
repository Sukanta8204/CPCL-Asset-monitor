import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../utils/services/api.service';

@Component({
  selector: 'app-dashboard-card',
  imports:[ CommonModule],
  templateUrl: './details-dashboard.component.html',
  styleUrls: ['./details-dashboard.component.css']
})
export class DashboardCardComponent {
  metrics = {
    inventory: 6,
    criticalMachines: 1,
    safeIndex: 83.33,
    availableTechnician: 6,
    totalSites: 2,
    totalMachinesOnAudit: 3
  };

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getDashBoardData().subscribe({
      next: (res) => this.metrics = res,
      error: (e) => console.error(e)
    })
  }

  chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  chartData = [
    {
      data: [5, 10, 6, 8, 4, 9],
      label: 'Failing Equipments',
      borderColor: '#ff6384',
      fill: false,
    }
  ];
}
