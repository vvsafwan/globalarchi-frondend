import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProNavComponent } from './pro-nav.component';

describe('ProNavComponent', () => {
  let component: ProNavComponent;
  let fixture: ComponentFixture<ProNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProNavComponent]
    });
    fixture = TestBed.createComponent(ProNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
