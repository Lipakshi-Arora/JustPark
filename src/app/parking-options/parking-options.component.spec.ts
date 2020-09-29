import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingOptionsComponent } from './parking-options.component';

describe('ParkingOptionsComponent', () => {
  let component: ParkingOptionsComponent;
  let fixture: ComponentFixture<ParkingOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
