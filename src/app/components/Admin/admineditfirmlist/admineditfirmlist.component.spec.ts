import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditfirmlistComponent } from './admineditfirmlist.component';

describe('AdmineditfirmlistComponent', () => {
  let component: AdmineditfirmlistComponent;
  let fixture: ComponentFixture<AdmineditfirmlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmineditfirmlistComponent]
    });
    fixture = TestBed.createComponent(AdmineditfirmlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
