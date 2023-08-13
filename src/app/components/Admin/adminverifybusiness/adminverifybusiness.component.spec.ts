import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminverifybusinessComponent } from './adminverifybusiness.component';

describe('AdminverifybusinessComponent', () => {
  let component: AdminverifybusinessComponent;
  let fixture: ComponentFixture<AdminverifybusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminverifybusinessComponent]
    });
    fixture = TestBed.createComponent(AdminverifybusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
