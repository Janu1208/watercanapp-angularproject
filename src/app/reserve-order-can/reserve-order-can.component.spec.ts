import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveOrderCanComponent } from './reserve-order-can.component';

describe('ReserveOrderCanComponent', () => {
  let component: ReserveOrderCanComponent;
  let fixture: ComponentFixture<ReserveOrderCanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveOrderCanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveOrderCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
