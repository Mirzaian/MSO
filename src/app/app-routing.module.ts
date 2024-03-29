import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InfoComponent } from './pages/account/info/info.component';
import { SettingsComponent } from './pages/account/settings/settings.component';
import { OverviewComponent } from './pages/server/overview.component';

import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { SignedGuard } from './guard/signed.guard';
import { ContactComponent } from './pages/footer/contact/contact.component';


const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [SignedGuard], pathMatch: 'full' }, // redirect to `login`
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'account/information', component: InfoComponent, canActivate: [AuthGuard] },
  { path: 'account/settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/server/overview', component: OverviewComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }  // Route for 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
