import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddbannerComponent } from './adminaddbanner.component';

describe('AdminaddbannerComponent', () => {
  let component: AdminaddbannerComponent;
  let fixture: ComponentFixture<AdminaddbannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminaddbannerComponent]
    });
    fixture = TestBed.createComponent(AdminaddbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
