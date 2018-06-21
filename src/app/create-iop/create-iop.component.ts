import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-iop',
  templateUrl: './create-iop.component.html',
  styleUrls: ['./create-iop.component.css']
})
export class CreateIopComponent implements OnInit {

  startDate;
  taskTime;
  priority;
  shutdownType;
  facility;
  functionalGroup;
  workOrder;
  descriptionOfWork;
  costCenter;
  resources;
  comments;

  logData() {
    console.log("data is:");
    console.log("Desc: " + this.descriptionOfWork);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
