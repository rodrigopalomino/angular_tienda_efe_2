import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselesComponent } from './carruseles.component';

describe('CarruselesComponent', () => {
  let component: CarruselesComponent;
  let fixture: ComponentFixture<CarruselesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarruselesComponent]
    });
    fixture = TestBed.createComponent(CarruselesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
