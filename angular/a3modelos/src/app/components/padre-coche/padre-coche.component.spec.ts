import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreCocheComponent } from './padre-coche.component';

describe('PadreCocheComponent', () => {
  let component: PadreCocheComponent;
  let fixture: ComponentFixture<PadreCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreCocheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
