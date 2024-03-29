import { Component, OnInit, Output } from '@angular/core';
import { vmGroups, vmServer } from 'src/app/models/vm-groups';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  connections: vmGroups[] = [];
  serverlist: vmServer[] = [];
  directory: vmGroups;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getVmGroups().subscribe((vmGroup => { this.connections = vmGroup }));
  }

  onClick(vmGroups: vmGroups) {
    console.log(vmGroups.name)
    this.directory = vmGroups;
    this.dataService.getVmServerByCategory().subscribe(res => { this.serverlist = res });
  }
}


