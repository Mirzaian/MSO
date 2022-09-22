import { Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA, OnInit, Output, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentLanguage: string = 'de-DE';

  footerNavigation = [
    { name: "Kontakt", id: "Contact", onClick: () => { this.ngZone.run(() => { this.router.navigate(['/contact']) }) } },
    { name: "Nutzungsbedinungen", id: "Terms and conditions", onClick: () => { this.ngZone.run(() => { this.router.navigate(['/contact']) }) }},
    { name: "Impressum", id: "Legal notice", onClick: () => { this.ngZone.run(() => { this.router.navigate(['/contact']) }) }},
    { name: "Datenschutz", id: "Data privacy", icon: "alert-imprint-dataprivacy", onClick: () => { this.ngZone.run(() => { this.router.navigate(['/contact']) }) }},
  ];

  constructor(private router: Router, private ngZone: NgZone, private cdf: ChangeDetectorRef, private translateService: TranslateService) {
    this.translateService.getTranslation(this.currentLanguage).subscribe(() => { this.loadTranslations() })
    translateService.onLangChange.subscribe((languageSettings) => {
      this.currentLanguage = languageSettings.lang;
      this.loadTranslations();
      this.cdf.markForCheck();
    })
  }

  ngOnInit(): void {
  }

  loadTranslations() {
    this.footerNavigation[0].name = this.translateService.instant("footer.contact");
    this.footerNavigation[1].name = this.translateService.instant("footer.terms");
    this.footerNavigation[2].name = this.translateService.instant("footer.lg");
    this.footerNavigation[3].name = this.translateService.instant("footer.dp");
  }
}

