
import TemaService from '../service/TemaService'
var socket
const realtime = io => {
    socket = io
}
export {realtime}
export default class TemaController {
    static create(req, res) {        
        TemaService
            .create( req.body )
            .then( response => {
                socket.emit('tema', true)
                res.send(response)
            })
    }

    static update( req, res ){
        const { id  } = req.params
        TemaService
            .update( id, req.body )
            .then(response => {
                socket.emit('tema', true)
                res.send(response)
            })
    }

    static delete( req, res ){        
        TemaService
            .delete(req.params.id)
            .then(response => {
                res.send(response)
            })
    }

    static findByPK( req, res ){
        TemaService
            .findByPK( req.params.id )
            .then(response => {
                res.send( response )
            })
    }

    static findAll(req, res){
        TemaService
            .findAll()
            .then(response => {
                res.send( response )
            })

    }

}