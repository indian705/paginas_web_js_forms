import { PageController } from "../page.controller.js";

class About extends PageController {
    constructor() {
        super('About', 'Acerca de')
    }
 
}

document.addEventListener('DOMContentLoaded', () => { new About()})
