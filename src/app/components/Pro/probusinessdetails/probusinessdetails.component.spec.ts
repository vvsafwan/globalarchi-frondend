import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbusinessdetailsComponent } from './probusinessdetails.component';

describe('ProbusinessdetailsComponent', () => {
  let component: ProbusinessdetailsComponent;
  let fixture: ComponentFixture<ProbusinessdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProbusinessdetailsComponent]
    });
    fixture = TestBed.createComponent(ProbusinessdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
