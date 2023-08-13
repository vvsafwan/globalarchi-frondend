import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfirmlistComponent } from './adminfirmlist.component';

describe('AdminfirmlistComponent', () => {
  let component: AdminfirmlistComponent;
  let fixture: ComponentFixture<AdminfirmlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminfirmlistComponent]
    });
    fixture = TestBed.createComponent(AdminfirmlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
