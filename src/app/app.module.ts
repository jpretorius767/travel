import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingComponent } from './booking/booking.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightshotelsComponent } from './flightshotels/flightshotels.component';
import { HolidaysComponent } from './holidays/holidays.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    FlightsComponent,
    FlightshotelsComponent,
    HolidaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
