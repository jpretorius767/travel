import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'flights-component',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  destinationType: string = 'domestic';
  departureDate: Date;
  returnDate: Date;
  to: string;
  from: string;
  adults: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  searchFlights () {
    console.log(this.to, this.from);
  }

}
