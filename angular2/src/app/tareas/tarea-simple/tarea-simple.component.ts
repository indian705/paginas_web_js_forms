import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-tarea-simple',
  templateUrl: './tarea-simple.component.html',
  styleUrls: ['./tarea-simple.component.css']
})
export class TareaSimpleComponent implements OnInit {

  aTareas : Array<string>
  sTarea : string

  constructor() { }

  ngOnInit() {
    this.aTareas = []
    let savedTareas = JSON.parse(localStorage.getItem('tareas'))
    if (savedTareas){
      this.aTareas = savedTareas
    }    
  }

  addTarea() {
    let stringTareas: string
    if (this.sTarea) {
      this.aTareas.push(this.sTarea)
      stringTareas = JSON.stringify(this.aTareas)
      localStorage.setItem('tareas', stringTareas)
      this.sTarea=''
    }
    console.dir(this.aTareas)    
  }
}
