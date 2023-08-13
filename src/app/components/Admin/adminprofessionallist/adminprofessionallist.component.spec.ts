import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprofessionallistComponent } from './adminprofessionallist.component';

describe('AdminprofessionallistComponent', () => {
  let component: AdminprofessionallistComponent;
  let fixture: ComponentFixture<AdminprofessionallistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminprofessionallistComponent]
    });
    fixture = TestBed.createComponent(AdminprofessionallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
