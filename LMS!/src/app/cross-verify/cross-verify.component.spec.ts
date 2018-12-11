import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossVerifyComponent } from './cross-verify.component';

describe('CrossVerifyComponent', () => {
  let component: CrossVerifyComponent;
  let fixture: ComponentFixture<CrossVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
