import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ComponentLibraryModule } from '@telekom/scale-components-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from '../app/components/overlay/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../app/components/overlay/header/header.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { OverviewComponent } from './pages/dashboard/overview/overview.component';
import { ListComponent } from './components/list/list.component';
import { SettingsComponent } from './pages/account/settings/settings.component';
import { InfoComponent } from './pages/account/info/info.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json' );
}

const routing: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'index', component: IndexComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    IndexComponent,
    HeaderComponent,
    PageNotFoundComponent,
    OverviewComponent,
    ListComponent,
    SettingsComponent,
    InfoComponent
  ],
  imports: [
    RouterModule.forRoot(routing),
    BrowserModule,
    AppRoutingModule,
    ComponentLibraryModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
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
