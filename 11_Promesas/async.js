async function main(){

    function promesas(){
        return new Promise(
            (resolve) => {
                setTimeout ( () => resolve('Ha pasado un rato'),3000)}
        )
    }

    function pintar(msg){
        console.log(msg)
    }

    let response 
    response = await promesas()

    pintar(response)
    console.log('Última línea')
}

document.addEventListener('DOMContentLoaded', main)


