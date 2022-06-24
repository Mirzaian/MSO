import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showOutMenu: boolean = false;

  mainNavigation = [
    {
      name: "Startseite",
      id: "index",
      children: [],
    },
      
    {
      name: "Monitoring",
      id: "overview",
      children: [
        {
          name: "Dashboard",
          id: "oberview-1",
          children: [
            { name: "Overview", id: "Third Level 4", href: "#third-level" },
          ],
        },
        {
          name: "Basic checks",
          id: "Second Level 2",
          children: [
            { name: "Uptime", id: "Third Level 3", href: "#third-level" },
          ],
        },
        {
          name: "Advanced checks",
          id: "Second Level 2",
          children: [
            { name: "Page Speed", id: "Third Level 3", href: "#third-level" },
            { name: "Transaction", id: "Third Level 3", href: "#third-level" },
          ],
        },
      ],
    },
    { name: "Reports", id: "Topic Three", href: "#topic-three" },
    { name: "Sharing", id: "Topic Four", href: "#topic-four" },
    { name: "Integrations", id: "Topic Five", href: "#topic-five" },
    { name: "Updates", id: "Topic Five", href: "#topic-five" },
  ];

  languageNavigation = [
    { name: "Deutsch", id: "de-DE", onClick: () => {this.ngZone.run(()=> {this.selectLanguage("de-DE")})}},
    { name: "Englisch", id: "en-US", onClick: () => {this.ngZone.run(()=> {this.selectLanguage("en-US")})}}
  ];

  iconNavigation = [
    { name: "Search", id: "search", icon: "action-search" },
  ];
  

  userNavigation = [
    { type: 'userInfo', shortName: 'Kevin', name: 'Kevin Mirzaian', email: 'k.mirzaian@telekom.de'},
    { type: 'divider'},
    { type: 'item', name: 'Account Informationen', id: 'user-care', href: '/user-info', onClick: () => {}, icon: 'user-file-user', iconPosition: 'prefix' },
    { type: 'item', name: 'Einstellungen', id: 'login-settings', href: '/settings', onClick: () => {}, icon: 'service-settings', iconPosition: 'prefix' },
    { type: 'divider'},
    { type: 'item', name: 'Kundenservice', id: 'user-support', href: '/support', onClick: () => {}, icon: 'service-support', iconPosition: 'prefix'  },
    { type: 'divider' },
    { type: 'button', name: 'Abmelden', id: 'logout', onClick: () => { this.logout()}, href: '#', variant: 'secondary'},
  ];

  currentLanguage: string = 'de-DE';
  isUserLoggedIn: boolean = false;

  constructor(private ngZone: NgZone, private cdf: ChangeDetectorRef, private translateService: TranslateService, private userService:UserService) {
    translateService.onLangChange.subscribe((languageSettings)=>{
      this.currentLanguage = languageSettings.lang;
      this.languageNavigation[0].name=this.translateService.instant("header.language.german");
      this.languageNavigation[1].name=this.translateService.instant("header.language.english");
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
