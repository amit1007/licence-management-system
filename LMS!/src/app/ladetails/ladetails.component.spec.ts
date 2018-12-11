import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LADetailsComponent } from './ladetails.component';

describe('LADetailsComponent', () => {
  let component: LADetailsComponent;
  let fixture: ComponentFixture<LADetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LADetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LADetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
