import { Component, OnInit } from '@angular/core';
import { vmGroups } from 'src/app/models/vm-groups';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private dataService: DataService) {
    
    console.log(dataService.getAll())
   }

  ngOnInit(): void {
  }

}
