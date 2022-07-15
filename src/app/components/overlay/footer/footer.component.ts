import { Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerNavigation = [
    { name: "Contact", id: "Contact", href: "#contact" },
    { name: "Terms and conditions", id: "Terms and conditions", href: "#terms-and-conditions"},
    { name: "Legal notice", id: "Legal notice", href: "#legal-notice"},
    { name: "Data privacy", id: "Data privacy", href: "#data-privacy", icon: "alert-imprint-dataprivacy"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
