export class App {
    constructor() {
        this.URLBase = 'https://www.googleapis.com/books/v1/volumes?q='
        this.nClave = document.querySelector('#clave')
        this.nBtnBuscar = document.querySelector('#btnBuscar')
        this.nOutput = document.querySelector('#output')
        this.clave = ''

        this.buscar = this.buscar.bind(this)
        this.nBtnBuscar.addEventListener('click', this.buscar)

        //Las dos líneas anteriores es lo mismo que lo que solemos poner:
        //this.nBtnBuscar.addEventListener('click', this.buscar.bind(this))
    }

    buscar(){
        let url
        this.clave = this.nClave.value
        if(this.clave){
            url = this.URLBase + this.clave
            fetch(url,{method:'GET'}).then(
                response => response.json()
            ).then(
                data => this.mostrar(data)
            )
        }
    }

    mostrar(data){
        let aLibros
        let html = '<ul>'
        console.log(data.items)
        aLibros = data.items.map(
            item => {
                return{
                    autores: item.volumeInfo.authors,
                    titulo: item.volumeInfo.title
                }
            }
        )
        console.log(aLibros)
        aLibros.forEach(item => {
            let autor = '&nbsp;'
            if(item.autores){
                autor = item.autores.join(', ')
            }
            html += `<dt>${item.titulo}</dt>`
            html += `<dd>${autor}</dd>`
        })  
        html += '</ul>'  
        this.nOutput.innerHTML = html
        this.nClave.value = ''
    }
}