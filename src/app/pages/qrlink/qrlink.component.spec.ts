import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrlinkComponent } from './qrlink.component';

describe('QrlinkComponent', () => {
  let component: QrlinkComponent;
  let fixture: ComponentFixture<QrlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
