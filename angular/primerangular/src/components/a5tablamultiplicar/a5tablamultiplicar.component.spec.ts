import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A5tablamultiplicarComponent } from './a5tablamultiplicar.component';

describe('A5tablamultiplicarComponent', () => {
  let component: A5tablamultiplicarComponent;
  let fixture: ComponentFixture<A5tablamultiplicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A5tablamultiplicarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A5tablamultiplicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
