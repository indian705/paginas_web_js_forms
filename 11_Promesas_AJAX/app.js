
import { DATOS, JSON } from './config.js'
import { AjaxService } from './ajax-service.js';

export class App {
    constructor () {
        //this.ndBtnDatos = document.querySelector('#btnDatos')
        //this.ndBtnJson = document.querySelector('#btnJson')
        //this.btnError = document.querySelector('#btnError')
        this.aBotones = document.querySelectorAll('button')
        this.ndOutput = document.querySelector('#output')
        this.ndError = document.querySelector('#error')
        
        /* this.ndBtnDatos.addEventListener('click', 
            this.pedirDatos.bind(this))
        this.ndBtnJson.addEventListener('click', 
            this.pedirDatos.bind(this))
        this.btnError.addEventListener('click', 
            this.pedirDatos.bind(this)) */
        
        this.aBotones.forEach( item => {
            item.addEventListener('click',this.pedirDatos.bind(this))
        })
    }

    pedirDatos(oEv) {
        switch (oEv.target.id) {            
            case 'btnDatos':
                new AjaxService('GET', DATOS, 'txt').send().then(
                    (response) => {this.mostrarDatos(response)},
                    (response) => {this.mostrarError(response)}
                    )
                break;
            case 'btnJson':
                new AjaxService('GET', JSON , 'json').send().then(
                    (response) => {this.mostrarDatos(response)},
                    (response) => {this.mostrarError(response)}
                    )
                break;
            case 'btnError':
                new AjaxService('GET', 'error' , '').send().catch(
                    (response) => {this.mostrarError(response)})
                break;           
        }
    }
    
    mostrarDatos(oDatos){
        let html
        html = '<ul>'
        for (const key in oDatos) {
            if (oDatos.hasOwnProperty(key)) {
                const value = oDatos[key];
                html += `<li>${key} : ${value}</li>`    
            }
        }
        html += '</ul>'
        this.ndOutput.innerHTML = html
        this.ndError.innerHTML = ''
    }

    mostrarError(oDatos){
        this.ndError.innerHTML = oDatos.error
        this.ndOutput.innerHTML = ''
    }
}
