function main(){

    function asincrono(callback){
        setTimeout(() => {
            const m = 'Ha pasado un rato'
            callback(m)
        }, 3000)
    }

    function pintar(msg){
        console.log(msg)
    }

    function addDOM(msg) {
        document.querySelector('#output').innerHTML = msg
    }
    
    asincrono(pintar)
    asincrono(addDOM)
    console.log('Ultima linea')
}

document.addEventListener('DOMContentLoaded', main)


