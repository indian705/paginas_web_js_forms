function main() {
    // let inNombre = document.querySelector('#nombre')
    // let inApellido = document.querySelector('#apellido')

    let aInputs = document.querySelectorAll('.val')
    let btnEnviar = document.querySelector('#enviar')
    let formForm1 = document.querySelector('#form1')
    let inDNI = document.querySelector('#dni')

    //inDNI.setCustomValidity('DNI incorrecto')
    inDNI.setCustomValidity('')
    console.dir(inDNI.validity)

    btnEnviar.addEventListener('click', preEnviar)
    formForm1.addEventListener('submit', enviar)
    // inNombre.addEventListener('input', validaText)
    // inApellido.addEventListener('input', validaText)

    aInputs.forEach( item => {
        item.addEventListener('input', validaText)
    })

    inDNI.addEventListener('input', validaDNI)

    function preEnviar () {
        console.log("Pulsado click")
        console.dir(formForm1)
    }

    function validaText(oEv) {
        let element = oEv.target
        console.dir(element)
        let validControl = true
        if (!element.checkValidity()) {
            let msg = ''
            if (element.validity.valueMissing) {
                msg = `El ${element.id} es imprescindible`
            } else if (element.validity.typeMismatch) {
                msg = `El formato del ${element.id} es incorrecto`
            } else if (element.validity.patternMismatch) {
                msg = `El formato del ${element.id} debe ser 34-XXXXXXXXX`
            } else if (element.validity.tooShort) {
                msg = `El formato del ${element.id} es demasiado corto`
            } else if (element.validity.tooLong) {
                msg = `El formato del ${element.id} es demasiado largo`
            }
            element.nextElementSibling.innerHTML = `<span class="h6">${msg}</span>`
            validControl = false
            element.nextElementSibling.classList.remove('hide')
            element.focus()
        } else {
            element.nextElementSibling.innerHTML = ''
            validControl = true
            element.nextElementSibling.classList.add('hide')
        }           
        return validControl  
    }

    function enviar(oEv) {
        if(checkInvalidInputs()) {
            console.log("No valido") 
             oEv.preventDefault()
        } else {
            // Esto sobraria para enviar realmente
            oEv.preventDefault()
            console.log("Enviando") 
        }


    }

    function checkInvalidInputs() {
        for (let i = 0; i < aInputs.length; i++) {
            const item = aInputs[i];
            if (!validaText({target: item}) ) {
                return true;
            }
        }
        if (!validDNI()){
            return true
        }
    }

    function validaDNI(){
        
    }
    

}

document.addEventListener('DOMContentLoaded', main)
