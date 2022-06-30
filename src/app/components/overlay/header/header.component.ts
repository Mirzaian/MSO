import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showOutMenu: boolean = false;
  isShown: boolean = false;

  mainNavigation = [
    {
      name: "Dashboard",
      id: "dashboard",
      href: "dashboard",
      children: [],
    },
      
    {
      name: "Server",
      id: "server",
      href: "dashboard/server/overview",
      children: [],
    }];

  languageNavigation = [
    { name: "Deutsch", id: "de-DE", onClick: () => {this.ngZone.run(()=> {this.selectLanguage("de-DE")})}},
    { name: "Englisch", id: "en-US", onClick: () => {this.ngZone.run(()=> {this.selectLanguage("en-US")})}}
  ];

  iconNavigation = [
    { name: "Search", id: "search", onClick: () => {this.ngZone.run(()=> {this.isShown = ! this.isShown})}, icon: "action-search" },
  ];
  

  userNavigation = [
    { type: 'userInfo', shortName: 'Kevin', name: 'Kevin Mirzaian', email: 'k.mirzaian@telekom.de'},
    { type: 'divider'},
    { type: 'item', name: 'Account Informationen', id: 'user-info', href: '/account/information', onClick: () => {}, icon: 'user-file-user', iconPosition: 'prefix' },
    { type: 'item', name: 'Einstellungen', id: 'user-settings', href: '/account/settings', onClick: () => {}, icon: 'service-settings', iconPosition: 'prefix' },
    { type: 'divider'},
    { type: 'item', name: 'Kundenservice', id: 'user-support', href: '/support', onClick: () => {}, icon: 'service-support', iconPosition: 'prefix'  },
    { type: 'divider' },
    { type: 'button', name: 'Abmelden', id: 'logout', onClick: () => { this.logout()}, href: '#', variant: 'secondary'},
  ];

  currentLanguage: string = 'de-DE';
  isUserLoggedIn: boolean = false;

  constructor(private ngZone: NgZone, private cdf: ChangeDetectorRef, private translateService: TranslateService, private userService:UserService) {
    this.translateService.getTranslation(this.currentLanguage).subscribe(()=>{this.loadTranslations()})
    translateService.onLangChange.subscribe((languageSettings)=>{
      this.currentLanguage = languageSettings.lang;
      this.loadTranslations();
    })
    userService.isUserLoggedIn$.subscribe((loginStatus)=>this.isUserLoggedIn = loginStatus)
  }

  public selectLanguage(event: string) {
    this.translateService.use(event);
    this.cdf.markForCheck();
    console.log(event);
  }

  ngOnInit(): void {
    // this.filter()
  }

  logout() {
    this.userService.logout()  
  }

  loadTranslations() {
    this.languageNavigation[0].name=this.translateService.instant("header.language.german");
    this.languageNavigation[1].name=this.translateService.instant("header.language.english");

    this.mainNavigation[0].name=this.translateService.instant("mainNavigation.dashboard");
    this.mainNavigation[1].name=this.translateService.instant("mainNavigation.server");

    this.iconNavigation[0].name=this.translateService.instant("iconNavigation.search");

    this.userNavigation[2].name=this.translateService.instant("userNavigation.user-care");
    this.userNavigation[3].name=this.translateService.instant("userNavigation.login-settings");
    this.userNavigation[5].name=this.translateService.instant("userNavigation.user-support");
    this.userNavigation[7].name=this.translateService.instant("userNavigation.logout");
  }

  /*
  filter() {
    this.iconNavigation=this.iconNavigation.filter((item)=>{
      if(item.id=="LogIn") {
        return false
      }
        else {
          return true
        }
    })
  }
  */


}
