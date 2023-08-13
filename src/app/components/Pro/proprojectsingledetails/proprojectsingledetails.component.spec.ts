import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprojectsingledetailsComponent } from './proprojectsingledetails.component';

describe('ProprojectsingledetailsComponent', () => {
  let component: ProprojectsingledetailsComponent;
  let fixture: ComponentFixture<ProprojectsingledetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProprojectsingledetailsComponent]
    });
    fixture = TestBed.createComponent(ProprojectsingledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
