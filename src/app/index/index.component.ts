import { Component, OnInit } from '@angular/core';

import { mainNavigation } from "../services/navbar/mainNavigation";
import { iconNavigation } from "../services/navbar/iconNavigation";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  mainNavigation = mainNavigation;
  iconNavigation = iconNavigation;

  constructor() { }

  ngOnInit(): void {
  }

}
