import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessdetailslistComponent } from './businessdetailslist.component';

describe('BusinessdetailslistComponent', () => {
  let component: BusinessdetailslistComponent;
  let fixture: ComponentFixture<BusinessdetailslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessdetailslistComponent]
    });
    fixture = TestBed.createComponent(BusinessdetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
