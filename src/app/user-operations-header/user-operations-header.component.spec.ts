import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOperationsHeaderComponent } from './user-operations-header.component';

describe('UserOperationsHeaderComponent', () => {
  let component: UserOperationsHeaderComponent;
  let fixture: ComponentFixture<UserOperationsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOperationsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOperationsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
