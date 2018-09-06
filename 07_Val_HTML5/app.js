function main() {
    let inNombre = document.querySelector('#nombre')
    let inApellido = document.querySelector('#apellido')
    let btnEnviar = document.querySelector('#enviar')

    inNombre.addEventListener('blur', validaNombre)
    inNombre.addEventListener('input', validaNombre)
    inApellido.addEventListener('blur', validaNombre)
    inApellido.addEventListener('input', validaNombre)

    function validaNombre(){       
        if (!this.value){
            console.log(`${this.id} incorrecto`)
            this.nextElementSibling.innerHTML = `${this.id} incorrecto`
        } else {
            this.nextElementSibling.innerHTML = ''
            validaFormulario()
        }
    }

    function validaFormulario() {
        if (inNombre.value && inApellido.value){
            btnEnviar.disabled = false
        }
    }
}

document.addEventListener('DOMContentLoaded', main)
