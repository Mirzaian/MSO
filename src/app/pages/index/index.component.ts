import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  categories = ["Windows Server", "Linux Server", "Server", "Server"]

  constructor() { }

  ngOnInit(): void {
  }

}
