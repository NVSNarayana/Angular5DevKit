import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonArrayComponent } from './json-array.component';

describe('JsonArrayComponent', () => {
  let component: JsonArrayComponent;
  let fixture: ComponentFixture<JsonArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
