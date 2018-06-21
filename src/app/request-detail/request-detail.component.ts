import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  /* Request Details */
  activityDescription;
  requestedStart;
  duration;
  vendor;
  priority;
  functionalGroup;
  /* Work Details */
  workOrder;
  notificationNumber;
  baseStartdate;
  baseEndDate;
  functionalLocation;
  plannedCost;
  /* Elegibility */
  picture;
  name;
  title;
  company;
  phoneNumber;
  email;
  certifications; // array of certifications and their relevant information(status, icon, name, exp. date)
  /* Materials */
  materials; // array of required materials(product, supplier, planned date, estimated date)
  /* Schedule approval */

  constructor() {
  /* tempororay placeholder values */
  this.activityDescription = 'temp';
  this.requestedStart = 'temp';
  this.duration = 'temp';
  this.vendor = 'temp';
  this.priority = 'temp';
  this.functionalGroup = 'temp';
  /* Work Details */
  this.workOrder = 'temp';
  this.notificationNumber = 'temp';
  this.baseStartdate = 'temp';
  this.baseEndDate = 'temp';
  this.functionalLocation = 'temp';
  this.plannedCost = 'temp';
  /* Elegibility */
  this.picture = 'temp';
  this.name = 'temp';
  this.title = 'temp';
  this.company = 'temp';
  this.phoneNumber = 'temp';
  this.email = 'temp';
  this.certifications = ['temp', 'temp', 'temp'];
  /* Materials */
  this.materials = ['temp', 'temp', 'temp'];
  }
  
  constructor() { }

  ngOnInit() {
  }

}
