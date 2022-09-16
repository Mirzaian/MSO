import { Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA, OnInit, Output, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerNavigation = [
    { name: "Contact", id: "Contact", onClick: () => { this.ngZone.run(() => { this.router.navigate(['/contact']) }) } },
    { name: "Terms and conditions", id: "Terms and conditions", href: "#terms-and-conditions"},
    { name: "Legal notice", id: "Legal notice", href: "#legal-notice"},
    { name: "Data privacy", id: "Data privacy", href: "#data-privacy", icon: "alert-imprint-dataprivacy"},
  ];

  constructor(private router: Router, private ngZone: NgZone) { }

  ngOnInit(): void {
  }

}
