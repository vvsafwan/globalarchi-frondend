import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProRenewpasswordComponent } from './pro-renewpassword.component';

describe('ProRenewpasswordComponent', () => {
  let component: ProRenewpasswordComponent;
  let fixture: ComponentFixture<ProRenewpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProRenewpasswordComponent]
    });
    fixture = TestBed.createComponent(ProRenewpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
