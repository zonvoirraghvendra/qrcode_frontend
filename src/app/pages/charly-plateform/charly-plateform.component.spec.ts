import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharlyPlateformComponent } from './charly-plateform.component';

describe('CharlyPlateformComponent', () => {
  let component: CharlyPlateformComponent;
  let fixture: ComponentFixture<CharlyPlateformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharlyPlateformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharlyPlateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
