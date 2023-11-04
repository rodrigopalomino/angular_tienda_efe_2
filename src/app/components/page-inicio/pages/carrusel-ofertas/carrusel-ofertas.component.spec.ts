import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselOfertasComponent } from './carrusel-ofertas.component';

describe('CarruselOfertasComponent', () => {
  let component: CarruselOfertasComponent;
  let fixture: ComponentFixture<CarruselOfertasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarruselOfertasComponent]
    });
    fixture = TestBed.createComponent(CarruselOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
