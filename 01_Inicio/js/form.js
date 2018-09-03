export class Form {
    constructor() {
        this.inpNombre = document.querySelector('#nombre')
        this.btnEnviar = document.querySelector('#btnEnviar')
        this.output = document.querySelector('#output')
        this.btnBorrar = document.querySelector('#btnBorrar')
        console.dir(this)
        this.btnEnviar.addEventListener('click',
            this.enviar.bind(this)) 
        this.btnBorrar.addEventListener('click',
            this.borrar.bind(this)) 

    }

    enviar() {
        this.output.innerHTML = `Hola ${this.inpNombre.value}`
    }

    borrar() {
        this.inpNombre.value = ''
        this.output.innerHTML = ''
    }
} 
