import { Component, OnInit } from '@angular/core';
import { vmGroups } from 'src/app/models/vm-groups';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  connections: vmGroups[]

  constructor(private dataService: DataService) {
    
    dataService.getAll().subscribe((vmGroup) => console.log(vmGroup));
   }

  ngOnInit(): void {
  }

}
