import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmdetailsComponent } from './firmdetails.component';

describe('FirmdetailsComponent', () => {
  let component: FirmdetailsComponent;
  let fixture: ComponentFixture<FirmdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirmdetailsComponent]
    });
    fixture = TestBed.createComponent(FirmdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
