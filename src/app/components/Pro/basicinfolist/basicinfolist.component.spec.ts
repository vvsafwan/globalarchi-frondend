import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicinfolistComponent } from './basicinfolist.component';

describe('BasicinfolistComponent', () => {
  let component: BasicinfolistComponent;
  let fixture: ComponentFixture<BasicinfolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicinfolistComponent]
    });
    fixture = TestBed.createComponent(BasicinfolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
