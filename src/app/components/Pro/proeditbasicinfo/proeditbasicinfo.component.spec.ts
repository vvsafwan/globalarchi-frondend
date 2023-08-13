import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProeditbasicinfoComponent } from './proeditbasicinfo.component';

describe('ProeditbasicinfoComponent', () => {
  let component: ProeditbasicinfoComponent;
  let fixture: ComponentFixture<ProeditbasicinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProeditbasicinfoComponent]
    });
    fixture = TestBed.createComponent(ProeditbasicinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
