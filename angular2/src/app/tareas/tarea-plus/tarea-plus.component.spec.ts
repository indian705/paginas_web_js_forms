import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaPlusComponent } from './tarea-plus.component';
import { FormsModule } from '@angular/forms';

describe('TareaPlusComponent', () => {
  let component: TareaPlusComponent;
  let fixture: ComponentFixture<TareaPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaPlusComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
