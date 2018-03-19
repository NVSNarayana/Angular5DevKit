import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCodeSupportComponent } from './angular-code-support.component';

describe('AngularCodeSupportComponent', () => {
  let component: AngularCodeSupportComponent;
  let fixture: ComponentFixture<AngularCodeSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCodeSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCodeSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
