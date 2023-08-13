import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProeditbusdetailsComponent } from './proeditbusdetails.component';

describe('ProeditbusdetailsComponent', () => {
  let component: ProeditbusdetailsComponent;
  let fixture: ComponentFixture<ProeditbusdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProeditbusdetailsComponent]
    });
    fixture = TestBed.createComponent(ProeditbusdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
