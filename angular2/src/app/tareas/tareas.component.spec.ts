import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasComponent } from './tareas.component';
import { TareaSimpleComponent } from '../tareas/tarea-simple/tarea-simple.component';
import { FormsModule } from '@angular/forms';
import { TareaPlusComponent } from './tarea-plus/tarea-plus.component';

describe('TareasComponent', () => {
  let component: TareasComponent;
  let fixture: ComponentFixture<TareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TareasComponent,
        TareaSimpleComponent,
        TareaPlusComponent  ],
      imports: [
          FormsModule
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
