import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProBookinglistComponent } from './pro-bookinglist.component';

describe('ProBookinglistComponent', () => {
  let component: ProBookinglistComponent;
  let fixture: ComponentFixture<ProBookinglistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProBookinglistComponent]
    });
    fixture = TestBed.createComponent(ProBookinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
