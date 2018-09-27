import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  aTareas : Array<string>
  sTarea : string

  constructor() { }

  ngOnInit() {
    this.aTareas = []
  }

  addTarea() {
    if (this.sTarea) {
      this.aTareas.push(this.sTarea)
    }    
  }

}
