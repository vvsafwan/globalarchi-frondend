import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProHomeComponent } from './pro-home.component';

describe('ProHomeComponent', () => {
  let component: ProHomeComponent;
  let fixture: ComponentFixture<ProHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProHomeComponent]
    });
    fixture = TestBed.createComponent(ProHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
