import { BASE, ITEMS } from "../config.js";

export class menuComponent{
    constructor(){
        this.items = ITEMS     
    }

    render(){
        const menu = document.createElement('nav')
        let itemsList = ""
        this.items.forEach(item => {
            itemsList += `<li><a href="${BASE+'/'+item[1]}">${item[0]}</a></li>`
        });
        menu.innerHTML = `<ul class="menu">${itemsList}</ul>`
        return menu
    }
}

