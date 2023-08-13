import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinglistComponent } from './bookinglist.component';

describe('BookinglistComponent', () => {
  let component: BookinglistComponent;
  let fixture: ComponentFixture<BookinglistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookinglistComponent]
    });
    fixture = TestBed.createComponent(BookinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
