import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { TareaSimpleComponent } from './tarea-simple/tarea-simple.component';
import { TareaPlusComponent } from './tarea-plus/tarea-plus.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TareasRoutingModule    
  ],
  declarations: [
    TareasComponent,
    TareaSimpleComponent,
    TareaPlusComponent,
  ]
})
export class TareasModule { }
