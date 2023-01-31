import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { userData } from 'src/app/models/auth';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public changePassword: FormGroup;
  user: userData[] = [];

  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataService.getUserData().subscribe((User => { this.user = User}));
    this.changePassword = this.formBuilder.group({
      oldPassword:[''],
      newPassword:[''],
      cnewPassword:['']
    })
  }

}
