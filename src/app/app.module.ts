import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeatherStatusComponent } from './weather-status/weather-status.component';
import { LeadDashboardComponent } from './lead-dashboard/lead-dashboard.component';
import { PlannerDashboardComponent } from './planner-dashboard/planner-dashboard.component';
import { IopListComponent } from './iop-list/iop-list.component';
import { RequestApprovalsComponent } from './request-approvals/request-approvals.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    NavbarComponent,
    WeatherStatusComponent,
    LeadDashboardComponent,
    PlannerDashboardComponent,
    IopListComponent,
    RequestApprovalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
