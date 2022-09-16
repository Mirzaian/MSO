// Angular basic stuff
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// Additionally library stuff
import { ComponentLibraryModule } from '@telekom/scale-components-angular';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
// Components
import { AppComponent } from './app.component';
import { FooterComponent } from '../app/components/overlay/footer/footer.component';
import { HeaderComponent } from '../app/components/overlay/header/header.component';
import { ListComponent } from './components/list/list.component';
// Pages
import { LoginComponent } from './pages/login/login.component';
import { SettingsComponent } from './pages/account/settings/settings.component';
import { InfoComponent } from './pages/account/info/info.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OverviewComponent } from './pages/server/overview.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactComponent } from './pages/footer/contact/contact.component';
import { TermsComponent } from './pages/footer/terms/terms.component';
import { DataPrivacyComponent } from './pages/footer/data-privacy/data-privacy.component';
import { LegalNoticeComponent } from './pages/footer/legal-notice/legal-notice.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    PageNotFoundComponent,
    OverviewComponent,
    ListComponent,
    SettingsComponent,
    InfoComponent,
    DashboardComponent,
    ContactComponent,
    TermsComponent,
    DataPrivacyComponent,
    LegalNoticeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentLibraryModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de-DE',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
