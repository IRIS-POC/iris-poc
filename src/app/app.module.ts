import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import '@angular/material/prebuilt-themes/indigo-pink.css';
import { FormsModule } from '@angular/forms';
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
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './service/login.service';
import { CardSpawnerComponent } from './card-spawner/card-spawner.component';

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
    RequestApprovalsComponent,
    CardSpawnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatGridListModule
  ],
  exports: [
    MatGridListModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
