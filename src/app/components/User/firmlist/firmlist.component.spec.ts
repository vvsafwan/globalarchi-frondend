import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmlistComponent } from './firmlist.component';

describe('FirmlistComponent', () => {
  let component: FirmlistComponent;
  let fixture: ComponentFixture<FirmlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirmlistComponent]
    });
    fixture = TestBed.createComponent(FirmlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
