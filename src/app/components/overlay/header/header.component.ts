import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { userData } from 'src/app/models/auth';
import { DataService } from 'src/app/services/data.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showOutMenu: boolean = false;
  isShown: boolean = false;
  currentLanguage: string = 'de-DE';
  isUserLoggedIn: boolean = false;
  private user: userData[] = [];

  constructor(private router: Router, private ngZone: NgZone, private cdf: ChangeDetectorRef,
    private translateService: TranslateService, private userService: UserService, private dataService: DataService) {
    this.dataService.getUserData().subscribe((User => { this.user = User; this.loadUserData()}));
    this.translateService.getTranslation(this.currentLanguage).subscribe(() => { this.loadTranslations() })
    translateService.onLangChange.subscribe((languageSettings) => {
      this.currentLanguage = languageSettings.lang;
    })
    userService.isUserLoggedIn$.subscribe((loginStatus) => this.isUserLoggedIn = loginStatus);
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


  loadUserData() {
    this.userNavigation[0].shortName = this.user[0]?.firstname;
    this.userNavigation[0].name = (this.user[0]?.firstname + " " +this.user[0]?.lastname);
    this.userNavigation[0].email = this.user[0]?.email;
  }

  loadTranslations() {
    this.languageNavigation[0].name = this.translateService.instant("header.language.german");
    this.languageNavigation[1].name = this.translateService.instant("header.language.english");

    this.mainNavigation[0].name = this.translateService.instant("mainNavigation.dashboard");
    this.mainNavigation[1].name = this.translateService.instant("mainNavigation.server");

    this.iconNavigation[0].name = this.translateService.instant("iconNavigation.search");

    this.userNavigation[2].name = this.translateService.instant("userNavigation.user-care");
    this.userNavigation[3].name = this.translateService.instant("userNavigation.login-settings");
    this.userNavigation[5].name = this.translateService.instant("userNavigation.user-support");
    this.userNavigation[7].name = this.translateService.instant("userNavigation.logout");
  }

  mainNavigation = [
    { name: "", id: "dashboard", onClick: () => { this.ngZone.run(() => { this.router.navigate(['dashboard']) }) }, children: [] },
    { name: "", id: "server", onClick: () => { this.ngZone.run(() => { this.router.navigate(['dashboard/server/overview']) }) }, children: [], }
  ];

  languageNavigation = [
    { name: "", id: "de-DE", onClick: () => { this.ngZone.run(() => { this.selectLanguage("de-DE") }) } },
    { name: "", id: "en-US", onClick: () => { this.ngZone.run(() => { this.selectLanguage("en-US") }) } }
  ];

  iconNavigation = [
    { name: "", id: "search", onClick: () => { this.ngZone.run(() => { this.isShown = !this.isShown }) }, icon: "action-search" },
  ];

  userNavigation = [
    { type: 'userInfo', shortName: '', name: '', email: '' },
    { type: 'divider' },
    { type: 'item', name: '', id: 'user-info', onClick: () => { this.ngZone.run(() => { this.router.navigate(['/account/information']) }) }, icon: 'user-file-user', iconPosition: 'prefix' },
    { type: 'item', name: '', id: 'user-settings', onClick: () => { this.ngZone.run(() => { this.router.navigate(['/account/settings']) }) }, icon: 'service-settings', iconPosition: 'prefix' },
    { type: 'divider' },
    { type: 'item', name: '', id: 'user-support', onClick: () => { this.ngZone.run(() => { this.router.navigate(['/support']) }) }, icon: 'service-support', iconPosition: 'prefix' },
    { type: 'divider' },
    { type: 'button', name: '', id: 'logout', onClick: () => { this.logout(); this.router.navigate(['/']); }, variant: 'secondary' },
  ];

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
