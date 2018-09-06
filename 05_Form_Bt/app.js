function main() {
    let input = document.querySelector('#nombre')

    input.addEventListener('change', ()=> {
        console.log(input.value)
    })
    input.addEventListener('input', ()=> {
        console.log(input.value)
    })
}

document.addEventListener('DOMContentLoaded', main)
