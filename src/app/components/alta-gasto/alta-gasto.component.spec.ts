import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaGastoComponent } from './alta-gasto.component';

describe('AltaGastoComponent', () => {
  let component: AltaGastoComponent;
  let fixture: ComponentFixture<AltaGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaGastoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
