import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbasicinfoComponent } from './probasicinfo.component';

describe('ProbasicinfoComponent', () => {
  let component: ProbasicinfoComponent;
  let fixture: ComponentFixture<ProbasicinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProbasicinfoComponent]
    });
    fixture = TestBed.createComponent(ProbasicinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
