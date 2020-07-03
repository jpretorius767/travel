import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'flights-component',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  flightType: string = 'domestic';
  departureDate: Date;
  returnDate: Date;
  to: string;
  from: string;
  numAdults: number = 1;
  flightBookingForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  public hasError = (controlName: string, errorName: string) =>{
    return this.flightBookingForm.controls[controlName].hasError(errorName);
  }

  ngOnInit(): void {
    this.flightBookingForm = this.formBuilder.group({
      flightType: ['', [Validators.required]],
      to: ['', Validators.required],
      from: ['', [Validators.required]],
      departureDate: ['', [Validators.required]],
      returnDate: [''],
      numAdults: [1, Validators.required]
    });

  }

  onSearchFlights (): void {
    console.log(this.flightBookingForm.errors);
    console.log(this.flightBookingForm.invalid);
    if (this.flightBookingForm.invalid) {
      return;
    }
    console.log(this.to, this.from);
  }

}
