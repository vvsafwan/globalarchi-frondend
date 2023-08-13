import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprofileComponent } from './proprofile.component';

describe('ProprofileComponent', () => {
  let component: ProprofileComponent;
  let fixture: ComponentFixture<ProprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProprofileComponent]
    });
    fixture = TestBed.createComponent(ProprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
