import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseReportComponent } from './license-report.component';

describe('LicenseReportComponent', () => {
  let component: LicenseReportComponent;
  let fixture: ComponentFixture<LicenseReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
