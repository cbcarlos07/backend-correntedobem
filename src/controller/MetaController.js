
import MetaService from '../service/MetaService'
var socket
const realtime = io =>{
    socket = io
}

class MetaController {
    static create(req, res) {
        
        MetaService
            .create( req.body )
            .then( response => {
                socket.emit('meta', true)
                res.send(response)
            })
    }

    static update( req, res ){
        const { id  } = req.params
        
        MetaService
            .update( id, req.body )
            .then(response => {
                socket.emit('meta', true)
                res.send(response)
            })
    }

    static delete( req, res ){        
        MetaService
            .delete(req.params.id)
            .then(response => {
                res.send(response)
            })
    }

    static findByPK( req, res ){
        MetaService
            .findByPK( req.params.id )
            .then(response => {
                res.send( response )
            })
    }

    static findAll(req, res){
        MetaService
            .findAll()
            .then(response => {
                res.send( response )
            })

    }

}
export {realtime, MetaController} 