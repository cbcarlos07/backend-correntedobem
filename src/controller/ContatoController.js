
import ContatoService from '../service/ContatoService'
var socket
const realtime = io => {
    socket = io
}
class ContatoController {
    static create(req, res) {
        ContatoService
            .create( req.body )
            .then( response => {
                socket.emit('contato', true)
                res.send(response)
            }).catch(e => console.log(e))
    }

    static update( req, res ){
        const { id  } = req.params
        
        ContatoService
            .update( id, req.body )
            .then(response => {   
                socket.emit('contato', true)
                res.send(response)
            })
    }


    static findAll(req, res){
        ContatoService
            .findAll()
            .then(response => {
                res.send( response )
            })
    }
 

}

export {ContatoController, realtime}