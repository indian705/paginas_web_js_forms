function main(){
    let form = document.querySelector('form')
    let inDni = document.querySelector('#dni')
    let inUser = document.querySelector('#user')
    let btnEnviar= document.querySelector('#btnEnviar')
    let inPassw = document.querySelector('#passw')
    let inPassw2 = document.querySelector('#passw2')

    form.addEventListener('submit', enviar)
    inDni.addEventListener('input', validaDNI)
    inUser.addEventListener('input', validaUser)
    inPassw2.addEventListener('input', comparaPassw)


    function enviar(oE){
        oE.preventDefault()

        /**
         * TODO : Código real de envío
         */
        console.log('Enviando')
    }

    function validaDNI(){
        inDni.setCustomValidity('DNI incorrecto')
        console.log('Validando DNI')
        const LETRAS = 'TRWAGMYFPDXBNJZSQVHLCKET'

        let num = inDni.value.substring(0,inDni.value.length-1)
        let letra = inDni.value.substring(inDni.value.length-1)

        if (isNaN(num *1) || num < 1 || num > 99999999 ) {
            return false
        } else if(LETRAS[num%23] !== letra) {
            return false
        }
        inDni.setCustomValidity('')     
    }

    function validaUser(){
        inUser.setCustomValidity('Nombre de usuario imprescindible')
        if (inUser.value){
            inUser.setCustomValidity('')
        }
    }

    function comparaPassw(){
        let msg='Las contraseñas no coinciden'
        if (inPassw2.value === inPassw.value){
            msg = ''
        }
        inPassw2.setCustomValidity(msg)
    }
}

document.addEventListener('DOMContentLoaded', main)

