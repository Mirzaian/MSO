import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NgModule, NO_ERRORS_SCHEMA, OnInit, Output } from '@angular/core';
import { json } from 'd3';
import { vmGroups, vmServer } from 'src/app/models/vm-groups';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  selectedServer: vmServer;

  @Input() cards: vmServer[] = [];

  constructor() { }

  ngOnInit() {
  }
  
  openModal(vmServer: vmServer) {
    this.selectedServer = vmServer;
    const modal = document.getElementById('modal') as any;
    modal.opened = true;
  }
  closeModal() {
    const modal = document.getElementById('modal') as any;
    modal.opened = false;
  }
}
