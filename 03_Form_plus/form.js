export class Form {
    /**
     *Procesa un radiobuton 
     */
    setRadio(name) {
        //let id = '[name=' + name + ']'
        const id = `[name='${name}']`
        const aRadio = document.querySelectorAll(id)
        for (let i = 0; i < aRadio.length; i++) {
            const item = aRadio[i];
            if (item.checked) {
                return item.value
            }
        }
    }

    /**
     *Procesa un Select/Option
     devolviendo un objeto con value y text 
     */
    setSelect(name) {
        const opciones = document.querySelector(`#${name}`)
        const oDato = {
            value :  opciones[opciones.selectedIndex].value,
            text :  opciones[opciones.selectedIndex].textContent
        }
        return oDato
    }

    /**
     * Procesa varios Checkbox con la misma clase
     */
    setMultiCheck(name){
        let aDatos = []
        let aCheckBoxes = document.querySelectorAll(`.${name}`)
        aCheckBoxes.forEach( item => {
            if(item.checked){
                aDatos.push(item.id)
            }
        })
        return aDatos
    }  

}