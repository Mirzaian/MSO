import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mainNavigation = [
    {
      name: "Topic One",
      id: "Topic One",
      children: [
        {
          name: "Second Level",
          id: "Second Level 3",
          children: [
            { name: "Third Level", id: "Third Level 4", href: "#third-level" },
            { name: "Third Level", id: "Third Level 5", href: "#third-level" },
            { name: "Third Level", id: "Third Level 6", href: "#third-level" },
            { name: "Third Level", id: "Third Level 7", href: "#third-level" },
            { name: "Third Level", id: "Third Level 8", href: "#third-level" },
            { name: "Third Level", id: "Third Level 9", href: "#third-level" },
            { name: "Third Level", id: "Third Level 10", href: "#third-level" },
          ],
        },
        {
          name: "Second Level",
          id: "Second Level 4",
          children: [
            { name: "Third Level", id: "Third Level 11", href: "#third-level" },
            { name: "Third Level", id: "Third Level 12", href: "#third-level" },
            { name: "Third Level", id: "Third Level 13", href: "#third-level" },
            { name: "Third Level", id: "Third Level 14", href: "#third-level" },
            { name: "Third Level", id: "Third Level 15", href: "#third-level" },
            { name: "Third Level", id: "Third Level 16", href: "#third-level" },
            { name: "Third Level", id: "Third Level 17", href: "#third-level" },
          ],
        },
        {
          name: "Second Level",
          id: "Second Level 5",
          children: [
            { name: "Third Level", id: "Third Level 18", href: "#third-level" },
            { name: "Third Level", id: "Third Level 19", href: "#third-level" },
            { name: "Third Level", id: "Third Level 20", href: "#third-level" },
            { name: "Third Level", id: "Third Level 21", href: "#third-level" },
            { name: "Third Level", id: "Third Level 22", href: "#third-level" },
            { name: "Third Level", id: "Third Level 23", href: "#third-level" },
            { name: "Third Level", id: "Third Level 24", href: "#third-level" },
          ],
        },
        {
          name: "Second Level",
          id: "Second Level 6",
          children: [
            { name: "Third Level", id: "Third Level 25", href: "#third-level" },
            { name: "Third Level", id: "Third Level 26", href: "#third-level" },
            { name: "Third Level", id: "Third Level 27", href: "#third-level" },
            { name: "Third Level", id: "Third Level 28", href: "#third-level" },
            { name: "Third Level", id: "Third Level 29", href: "#third-level" },
            { name: "Third Level", id: "Third Level 30", href: "#third-level" },
          ],
        },
        { name: "Second Level", id: "Second Level 7" },
      ],
    },
    {
      name: "Topic Two",
      id: "Topic Two",
      children: [
        {
          name: "Second Level",
          id: "Second Level 1",
          children: [
            { name: "Third Level", id: "Third Level 1", href: "#third-level" },
            { name: "Third Level", id: "Third Level 2", href: "#third-level" },
          ],
        },
        {
          name: "Second Level",
          id: "Second Level 2",
          children: [
            { name: "Third Level", id: "Third Level 3", href: "#third-level" },
          ],
        },
      ],
    },
    { name: "Topic Three", id: "Topic Three", href: "#topic-three" },
    { name: "Topic Four", id: "Topic Four", href: "#topic-four" },
    { name: "Topic Five", id: "Topic Five", href: "#topic-five" },
  ];
  
  iconNavigation = [
    { name: "Log Out", id: "Logout", href: "#", onClick: () => {this.logout()}, icon: "user-file-user" },
    { name: "Log in", id: "LogIn", href: "#", onClick: () => {this.logout()}, icon: "action-mute" }
  ];

  languageNavigation = [
    { name: "Deutsch", onClick: () => {this.selectLanguage("de-DE")}},
    { name: "Englisch", onClick: () => {this.selectLanguage("en-US")}}
  ];

  currentLanguage: string = 'de-DE';
  isUserLoggedIn: boolean = false;

  constructor(private translateService: TranslateService, private userService:UserService) {
    translateService.onLangChange.subscribe((languageSettings)=>{
      this.currentLanguage = languageSettings.lang;
      this.languageNavigation[0].name=this.translateService.instant("header.language.german");
      this.languageNavigation[1].name=this.translateService.instant("header.language.english");
    })
    userService.isUserLoggedIn$.subscribe((loginStatus)=>this.isUserLoggedIn = loginStatus)
  }

  public selectLanguage(event: string) {
    this.translateService.use(event);
    console.log(event)
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
