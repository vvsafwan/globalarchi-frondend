import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProRegisterComponent } from './pro-register.component';

describe('ProRegisterComponent', () => {
  let component: ProRegisterComponent;
  let fixture: ComponentFixture<ProRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProRegisterComponent]
    });
    fixture = TestBed.createComponent(ProRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
