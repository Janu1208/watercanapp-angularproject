import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewstockComponent } from './adminviewstock.component';

describe('AdminviewstockComponent', () => {
  let component: AdminviewstockComponent;
  let fixture: ComponentFixture<AdminviewstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
