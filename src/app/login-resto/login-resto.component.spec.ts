import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRestoComponent } from './login-resto.component';

describe('LoginRestoComponent', () => {
  let component: LoginRestoComponent;
  let fixture: ComponentFixture<LoginRestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRestoComponent]
    });
    fixture = TestBed.createComponent(LoginRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
