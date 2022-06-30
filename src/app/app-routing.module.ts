import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InfoComponent } from './pages/account/info/info.component';
import { SettingsComponent } from './pages/account/settings/settings.component';
import { OverviewComponent } from './pages/server/overview.component';

import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '',   component: LoginComponent, pathMatch: 'full' }, // redirect to `login`
  { path: 'dashboard', component: DashboardComponent },
  { path: 'account/information', component: InfoComponent },
  { path: 'account/settings', component: SettingsComponent },
  { path: 'dashboard/server/overview', component: OverviewComponent },
  { path: '**', component: PageNotFoundComponent }  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
