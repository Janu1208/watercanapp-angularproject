import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminoperationsheaderComponent } from './adminoperationsheader.component';

describe('AdminoperationsheaderComponent', () => {
  let component: AdminoperationsheaderComponent;
  let fixture: ComponentFixture<AdminoperationsheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminoperationsheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminoperationsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
