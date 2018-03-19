import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Index0Component } from './index0.component';

describe('Index0Component', () => {
  let component: Index0Component;
  let fixture: ComponentFixture<Index0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Index0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Index0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
