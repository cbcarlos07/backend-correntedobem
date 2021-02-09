
import AreaService from '../service/AreaService'
let socket
const realtime = io => {
    socket = io
}

class AreaController {
    static create(req, res) {
        AreaService
            .create( req.body )
            .then( response => {
                socket.emit('posts',true)
                res.send(response)
            }).catch(e => console.log(e))
    }

    static update( req, res ){
        const { id  } = req.params
        
        AreaService
            .update( id, req.body )
            .then(response => {
                socket.emit('posts',true)
                res.send(response)
            })
    }

    static delete( req, res ){        
        AreaService
            .delete(req.params.id)
            .then(response => {
                socket.emit('posts',true)
                res.send(response)
            })
    }

    static findByPK( req, res ){
        AreaService
            .findByPK( req.params.id )
            .then(response => {
                res.send( response )
            })
    }

    static findAll(req, res){
        AreaService
            .findAll()
            .then(response => {
                res.send( response )
            })
    }
    static subArea(req, res){
        AreaService
            .subArea()
            .then(response => {
                res.send( response )
            })
    }

}

export {AreaController, realtime} 