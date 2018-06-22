import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { CreateIopComponent } from './create-iop/create-iop.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';

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
    CardSpawnerComponent,
    CreateIopComponent,
    RequestDetailComponent,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatGridListModule,
    NgbModule.forRoot()
  ],
  exports: [
    MatGridListModule
  ],
  providers: [
    LoginService
  ],
  schemas: [ NO_ERRORS_SCHEMA ],

  bootstrap: [AppComponent]
})
export class AppModule { }
