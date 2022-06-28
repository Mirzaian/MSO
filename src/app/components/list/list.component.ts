import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cards: any[] = [
    {
      "name": "he104488 D4 CTXH Amin DT1",
      "img": 'assets/images/os/windows.png'
    },
    {
      "name": "he104488 D4 CTXH Amin DT2",
      "img": 'assets/images/os/ubuntu.png'
    },
    {
      "name": "he104488 D4 CTXH Amin DT3",
      "img": 'assets/images/os/debian.png'
    },
    {
      "name": "he104488 D4 CTXH Amin DT4",
      "img": 'assets/images/os/macos.png'
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }

  openModal() {
    const modal = document.getElementById('modal') as any;
    modal.opened = true;
  }
  closeModal() {
    const modal = document.getElementById('modal') as any;
    modal.opened = false;
  }
}
