import { Component, OnInit } from '@angular/core';
import { TareaModel, TareaIf } from '../../models/tarea.model';


@Component({
  selector: 'cas-tarea-plus',
  templateUrl: './tarea-plus.component.html',
  styleUrls: ['./tarea-plus.component.css']
})
export class TareaPlusComponent implements OnInit {
  //newTarea: TareaModel
  newTarea: TareaIf
  aTareas: Array<TareaIf>

  constructor() { }

  ngOnInit() {
    //this.newTarea = new TareaModel('', false)
    this.newTarea = {nombre:'', isCompleted: false}
    this.aTareas = []
  }

  addTarea() {
    if(!this.newTarea.nombre) {return}
    console.log(this.newTarea)
    //this.aTareas.push(JSON.parse(JSON.stringify(this.newTarea)))
    this.aTareas.push(Object.assign({}, this.newTarea))
    console.log(this.aTareas)
    this.newTarea.nombre = ''
  }

  borrarTarea(i){
    this.aTareas.splice(i,1)
  }

}
