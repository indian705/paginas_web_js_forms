import { FetchService } from "./fetch-service.js";

export class ListaTareas {
    constructor() {
        this.nodoListaTareas = document.querySelector('#lista')
        this.nodoBtnAdd = document.querySelector('#btnAdd')
        this.nodoNewTarea = document.querySelector('#inTarea')
        this.nodoBtnAdd.addEventListener('click', this.addTarea.bind(this))
        this.uRL = 'http://localhost:3000/tareas'
        this.aTareas = []
        this.fetchService = new FetchService()       
        this.getTareas()
    }

    getTareas() {
        this.fetchService.send(this.uRL, {method: 'GET' })
            .then( data => {
                this.aTareas = data

                /* this.aTareas = this.aTareas.filter(
                    (item) => {                        
                        if (item.name.indexOf('Aprender') >= 0 ) { 
                            return true} 
                        else { return false }
                    }
                ) */

                this.renderLista()
            },
            error => {console.dir(error)}
            )
    }
    
    renderLista() {
        let html = ''
        this.aTareas.forEach(
            item =>  html += this.renderTarea(item)
        )
        this.nodoListaTareas.innerHTML = html
        this.aNodosCheck = document.querySelectorAll('[name="is-completa"]')
        this.aNodosBorrar = document.querySelectorAll('.borrar-activo')
        this.aNodosCheck.forEach(
            item => item.addEventListener('change', this.checkTarea.bind(this))
        )
        this.aNodosBorrar.forEach(
            item => item.addEventListener('click', this.borrarTarea.bind(this))
        )
    }

    renderTarea(data) {
        let htmlView =  `
            <li>
            <input type="checkbox" name="is-completa" id="check-${data.id}"
                data-id="${data.id}" ${data.isComplete ? "checked" : '' }>
            <span class="nombre-tarea ${data.isComplete ? "hecho" : '' }">
            ${data.name}</span>
            <span id="borrar-${data.id}" data-id="${data.id}"
                class="borrar-tarea ${data.isComplete ? 'borrar-activo' : 'inactivo' }">🗑️</span>
            </li>
        `
        return htmlView
    }

    addTarea() {
        if (!this.nodoNewTarea.value) {return}
        let newTarea = {
            name: this.nodoNewTarea.value,
            isComplete: false
        }
        this.nodoNewTarea.value = ''
        let headers = new Headers()
        headers.append("Content-Type", "application/json");
        this.fetchService.send(this.uRL, {
            method: 'POST', 
            headers : headers,
            body: JSON.stringify(newTarea)
        }).then(
            response => {
                console.log(response)
                this.getTareas()
            },
            error => console.log(error)
        )
    }



    checkTarea(oEv){
        console.log(oEv.target.dataset.id)
        console.log(oEv.target.checked)
        let datos = {
            isComplete : oEv.target.checked
        }
        let url = this.uRL + '/' + oEv.target.dataset.id
        let headers = new Headers()
        headers.append("Content-Type", "application/json")
        console.dir(headers)
        this.fetchService.send(url, {
            method: 'PATCH', 
            headers : headers,
            body:JSON.stringify(datos) 
            })
            .then(
                response => this.getTareas(),
                error => console.log(error)
            )
    }

    borrarTarea(oEv){
        console.log(oEv.target.dataset.id)
        let url = this.uRL + '/' + oEv.target.dataset.id
        this.fetchService.send(url, {method: 'DELETE' })
            .then(
                data => { 
                    console.log(data)
                    this.getTareas() 
                },
                error => console.log(error)
            )      
    }





}