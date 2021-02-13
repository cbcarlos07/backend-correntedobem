
import AcoesService from '../service/AcoesService'
let socket
const realtime = io => {
    socket = io
}

class AcoesServiceController {
    static create(req, res) {
        AcoesService
            .create( req.body )
            .then( response => {
                socket.emit('acoes',true)
                res.send(response)
            }).catch(e => console.log(e))
    }

    static update( req, res ){
        const { id  } = req.params
        
        AcoesService
            .update( id, req.body )
            .then(response => {
                socket.emit('acoes',true)
                res.send(response)
            })
    }


    static findAll(req, res){
        AcoesService
            .findAll()
            .then(response => {
                res.send( response )
            })
    }

}

export { realtime} 
export default AcoesServiceController