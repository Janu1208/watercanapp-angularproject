import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreserveComponent } from './viewreserve.component';

describe('ViewreserveComponent', () => {
  let component: ViewreserveComponent;
  let fixture: ComponentFixture<ViewreserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
