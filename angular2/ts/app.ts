interface Direccion {
    calle: string
    poblacion: string
}

class Usuario {
    /* name:string
    lastName: string
    edad: number

    constructor (name,lastName, edad){
        this.name = name
        this.lastName = lastName
        this.edad = edad
    } */

    constructor (public name:string, 
                public lastName:string, 
                public edad:number,
                public direccion: Direccion){}

    saludar() {
        console.log(`Hola, soy ${this.name} ${this.lastName}`)
        console.log(this)
    }

    crecer () {
        this.edad++
    }
}
let user1: Usuario = new Usuario('Pepe', 'Perez',  34, {calle:'Pez', poblacion:'Teruel'})

user1.crecer()
user1.saludar()
