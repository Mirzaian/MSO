import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentLanguage: string = 'de-DE';
  isUserLoggedIn: boolean = false;

  constructor(private translateService: TranslateService, private userService:UserService) {
    translateService.onLangChange.subscribe((languageSettings)=>this.currentLanguage = languageSettings.lang)
    userService.isUserLoggedIn$.subscribe((loginStatus)=>this.isUserLoggedIn = loginStatus)
  }

  public selectLanguage(event: string) {
    this.translateService.use(event);
  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout()
    
  }

}
