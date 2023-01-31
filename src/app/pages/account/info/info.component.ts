import { userData } from './../../../models/auth';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  user: userData[] = [];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUserData().subscribe((User => { this.user = User}));
  }
}
