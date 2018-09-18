/**
 * Servicio AJAX
 */
export class FetchService {
    constructor() {
        this.oDatos = {}
    }

    send(url, config) {        
        return new Promise( (resolve, reject) => {
            fetch(url, config)
            .then(
                (response) => {
                    if (response.status === 200) {
                        return response.json()
                    } else {
                        reject( 
                            { status : response.status,
                            statusText: response.statusText}
                        )
                    }
                }
            ).then(
                (data) => { resolve( data )}
            )
        }
        )        
    }
}

