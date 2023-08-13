import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProForgotpasswordComponent } from './pro-forgotpassword.component';

describe('ProForgotpasswordComponent', () => {
  let component: ProForgotpasswordComponent;
  let fixture: ComponentFixture<ProForgotpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProForgotpasswordComponent]
    });
    fixture = TestBed.createComponent(ProForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
