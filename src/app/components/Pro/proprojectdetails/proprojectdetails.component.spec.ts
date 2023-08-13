import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprojectdetailsComponent } from './proprojectdetails.component';

describe('ProprojectdetailsComponent', () => {
  let component: ProprojectdetailsComponent;
  let fixture: ComponentFixture<ProprojectdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProprojectdetailsComponent]
    });
    fixture = TestBed.createComponent(ProprojectdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
