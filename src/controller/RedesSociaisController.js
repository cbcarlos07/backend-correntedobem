

import RedesSociaisService from '../service/RedesSociaisService'
var socket
const realtime = io => {
    socket = io
}

export {realtime}
export default class RedesSociaisController {
    
    static create(req, res) {
        RedesSociaisService
            .create( req.body )
            .then( response => {
                socket.emit('redes', true)
                res.send(response)
            })
    }

    static update( req, res ){
        const { id  } = req.params        
        RedesSociaisService
            .update( id, req.body )
            .then(response => {
                socket.emit('redes', true)
                res.send(response)
            })
    }

    static delete(req, res){
        const { id  } = req.params        
        RedesSociaisService
            .delete( id )
            .then(response => {
                socket.emit('redes', true)
                res.send(response)
            })
    }
    static findByPK(req, res){
        const { id  } = req.params        
        RedesSociaisService
            .findByPK( {id} )
            .then(response => {
                res.send(response)
            })
    }
    static findAll(req, res){
        
        RedesSociaisService
            .findAll(  )
            .then(response => {
                res.send(response)
            })
    }
  

}