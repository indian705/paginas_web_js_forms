import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaSimpleComponent } from './tarea-simple.component';
import { FormsModule } from '@angular/forms';

describe('TareaSimpleComponent', () => {
  let component: TareaSimpleComponent;
  let fixture: ComponentFixture<TareaSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaSimpleComponent ],
      imports: [
        FormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
