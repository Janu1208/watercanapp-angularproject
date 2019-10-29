import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCansComponent } from './order-cans.component';

describe('OrderCansComponent', () => {
  let component: OrderCansComponent;
  let fixture: ComponentFixture<OrderCansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
