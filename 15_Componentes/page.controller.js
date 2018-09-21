import { APPTITLE } from './config.js'
import { HeadComponent} from './componentes/head.component.js'
import { HeaderComponent } from './componentes/header.component.js'
import { menuComponent } from './componentes/menu.component.js'
import { FooterComponent } from './componentes/footer.component.js'

export class PageController{
    constructor(page, title) {
        this.appTitle = APPTITLE
        this.pageTitle = (page) ? this.appTitle + ' | ' + page : this.appTitle
        this.title = title || this.appTitle
        this.address = {
            autor: 'IGO',
            empresa: 'CAS Training',
            lugar: 'Getafe - 2018'
        }        
        this.head = new HeadComponent(this.pageTitle).render()
        this.header = new HeaderComponent(this.title).render()
        this.menu = new menuComponent().render()
        this.main = document.createElement('main')
        this.footer = new FooterComponent(this.address).render()
        document.head.insertAdjacentHTML('afterbegin', this.head) 
        document.body.appendChild(this.header)
        document.body.appendChild(this.menu)
        document.body.appendChild(this.main)   
        document.body.appendChild(this.footer)
    }
}
