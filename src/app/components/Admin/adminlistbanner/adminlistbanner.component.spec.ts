import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistbannerComponent } from './adminlistbanner.component';

describe('AdminlistbannerComponent', () => {
  let component: AdminlistbannerComponent;
  let fixture: ComponentFixture<AdminlistbannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminlistbannerComponent]
    });
    fixture = TestBed.createComponent(AdminlistbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
