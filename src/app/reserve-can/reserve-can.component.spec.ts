import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveCanComponent } from './reserve-can.component';

describe('ReserveCanComponent', () => {
  let component: ReserveCanComponent;
  let fixture: ComponentFixture<ReserveCanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveCanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
