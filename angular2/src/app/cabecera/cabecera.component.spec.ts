import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraComponent } from './cabecera.component';
import { LogoComponent } from '../logo/logo.component';

describe('CabeceraComponent', () => {
  let component: CabeceraComponent;
  let fixture: ComponentFixture<CabeceraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CabeceraComponent,
        LogoComponent
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it(`should have as title 'Angular'`, async(() => {
    expect(component.titulo).toContain('Angular');
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
