import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveModifyOrderComponent } from './reserve-modify-order.component';

describe('ReserveModifyOrderComponent', () => {
  let component: ReserveModifyOrderComponent;
  let fixture: ComponentFixture<ReserveModifyOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveModifyOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveModifyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
