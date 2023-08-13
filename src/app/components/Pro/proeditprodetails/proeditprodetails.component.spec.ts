import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProeditprodetailsComponent } from './proeditprodetails.component';

describe('ProeditprodetailsComponent', () => {
  let component: ProeditprodetailsComponent;
  let fixture: ComponentFixture<ProeditprodetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProeditprodetailsComponent]
    });
    fixture = TestBed.createComponent(ProeditprodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
