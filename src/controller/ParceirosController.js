
import ParceirosService from '../service/ParceirosService'
let socket
const realtime = io => {
    socket = io
}

class ParceirosController {
    static create(req, res) {
        ParceirosService
            .create( req.body )
            .then( response => {
                socket.emit('parceiros', true)
                res.send(response)
            })
    }

    static update( req, res ){
        const { id  } = req.params
        
        ParceirosService
            .update( id, req.body )
            .then(response => {
                socket.emit('parceiros', true)
                res.send(response)
            })
    }

    static delete( req, res ){        
        ParceirosService
            .delete(req.params.id)
            .then(response => {
                socket.emit('parceiros', true)
                res.send(response)
            })
    }

    static findByPK( req, res ){
        ParceirosService
            .findByPK( req.params.id )
            .then(response => {
                res.send( response )
            })
    }

    static findAll(req, res){
        ParceirosService
            .findAll()
            .then(response => {
                res.send( response )
            })

    }

}
export {realtime} 
export default ParceirosController