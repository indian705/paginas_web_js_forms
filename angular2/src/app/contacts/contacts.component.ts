import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-contacts',  
  template:`<cas-lista-contactos class="row">
        Dentro de la llamada al componente
        </cas-lista-contactos>`,
  styles: []
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
