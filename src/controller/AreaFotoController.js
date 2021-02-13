
import AreaFotoService from '../service/AreaFotoService'
let socket
const realtime = io => {
    socket = io
}

class AreaFotoController {
    static create(req, res) {
        AreaFotoService
            .create( req.body )
            .then( response => {
                socket.emit('foto',true)
                res.send(response)
            }).catch(e => console.log(e))
    }

    static update( req, res){
        AreaFotoService
        .update( req.params.id, req.body )
        .then( response => {
            socket.emit('foto',true)
            res.send(response)
        }).catch(e => console.log(e))
    }

    
   

    static delete( req, res ){        
        AreaFotoService
            .delete(req.params.id)
            .then(response => {
                socket.emit('foto',true)
                res.send(response)
            })
    }

    static findByArea( req, res ){
        AreaFotoService
            .findByArea( req.params.id )
            .then(response => {
                res.send( response )
            })
    }


}

export {AreaFotoController, realtime} 