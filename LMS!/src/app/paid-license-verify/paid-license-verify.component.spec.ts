import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidLicenseVerifyComponent } from './paid-license-verify.component';

describe('PaidLicenseVerifyComponent', () => {
  let component: PaidLicenseVerifyComponent;
  let fixture: ComponentFixture<PaidLicenseVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidLicenseVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidLicenseVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
