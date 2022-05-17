import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentLanguage: string = 'de-DE';

  constructor(private translateService: TranslateService) {
    translateService.onLangChange.subscribe((languageSettings)=>this.currentLanguage = languageSettings.lang)
  }

  public selectLanguage(event: string) {
    this.translateService.use(event);
  }
}
