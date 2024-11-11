import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillacomplexComponent } from './plantillacomplex.component';

describe('PlantillacomplexComponent', () => {
  let component: PlantillacomplexComponent;
  let fixture: ComponentFixture<PlantillacomplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillacomplexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillacomplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
