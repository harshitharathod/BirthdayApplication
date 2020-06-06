import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterregisterComponent } from './afterregister.component';

describe('AfterregisterComponent', () => {
  let component: AfterregisterComponent;
  let fixture: ComponentFixture<AfterregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
