import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSetttingsFormComponent } from './user-setttings-form.component';

describe('UserSetttingsFormComponent', () => {
  let component: UserSetttingsFormComponent;
  let fixture: ComponentFixture<UserSetttingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSetttingsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSetttingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
