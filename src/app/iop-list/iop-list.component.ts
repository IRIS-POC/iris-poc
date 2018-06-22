import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iop-list',
  templateUrl: './iop-list.component.html',
  styleUrls: ['./iop-list.component.css']
})
export class IopListComponent implements OnInit {

  mockData = Array();

  constructor() { }

  ngOnInit() {
    /* Creating mock data with random values for IOP-List */
    for(let i=0; i<10; i++) {
      let tempDate = new Date(Date.now() - Math.floor(Math.random() * 8000000000))
      let card = {
        iopNumber : Math.floor(Math.random() * 3000),
        date : tempDate.toString().substring(4, 15),
        phase : Math.ceil(Math.random() * 4),
        description: 'Description placeholder',
        boolean: Math.random() > 0.7 ? true : false
      }
      this.mockData.push(card);
    }
  }
}
