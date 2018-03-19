import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsharpNewFeaturesComponent } from './csharp-new-features.component';

describe('CsharpNewFeaturesComponent', () => {
  let component: CsharpNewFeaturesComponent;
  let fixture: ComponentFixture<CsharpNewFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsharpNewFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsharpNewFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
