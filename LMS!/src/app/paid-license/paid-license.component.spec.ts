import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidLicenseComponent } from './paid-license.component';

describe('PaidLicenseComponent', () => {
  let component: PaidLicenseComponent;
  let fixture: ComponentFixture<PaidLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
