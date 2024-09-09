import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizadorDatosComponentComponent } from './visualizador-datos-component.component';

describe('VisualizadorDatosComponentComponent', () => {
  let component: VisualizadorDatosComponentComponent;
  let fixture: ComponentFixture<VisualizadorDatosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizadorDatosComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizadorDatosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
