import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EUserLicenseComponent } from './euser-license.component';

describe('EUserLicenseComponent', () => {
  let component: EUserLicenseComponent;
  let fixture: ComponentFixture<EUserLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EUserLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EUserLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
