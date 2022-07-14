import { Component, OnInit } from '@angular/core';
import { chart } from 'src/app/services/data.charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  cards: any[] = [
    { id: 1, name: "Gesamte Serveranzahl", totalServer: 150, format: "" },
    { id: 1, name: "Durchschnittliche CPU Auslastung", totalServer: 35, format: "%" },
    { id: 1, name: "Gesamte Uptime", totalServer: 150, format: "Std" },
    { id: 1, name: "Gesamte Speicherauslastung", totalServer: 150, format: "TB" }
  ]

  chart: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;


  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { chart });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
