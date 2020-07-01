import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightshotelsComponent } from './flightshotels.component';

describe('FlightshotelsComponent', () => {
  let component: FlightshotelsComponent;
  let fixture: ComponentFixture<FlightshotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightshotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightshotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
