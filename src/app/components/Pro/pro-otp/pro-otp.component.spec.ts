import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProOtpComponent } from './pro-otp.component';

describe('ProOtpComponent', () => {
  let component: ProOtpComponent;
  let fixture: ComponentFixture<ProOtpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProOtpComponent]
    });
    fixture = TestBed.createComponent(ProOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
