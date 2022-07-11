import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: any[] = [
    { id: 1, name: "Gesamte Serveranzahl", totalServer: 150, format: "" },
    { id: 1, name: "Durchschnittliche CPU Auslastung", totalServer: 35, format: "%" },
    { id: 1, name: "Gesamte Uptime", totalServer: 150, format: "Std" },
    { id: 1, name: "Gesamte Speicherauslastung", totalServer: 150, format: "TB" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
