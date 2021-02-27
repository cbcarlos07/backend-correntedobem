
import QuemSomosFotosService from '../service/QuemSomosFotosService'
let socket
const realtime = io => {
    socket = io
}

class QuemSomosFotosController {
    static create(req, res) {
        QuemSomosFotosService
            .create( req.body )
            .then( response => {
                socket.emit('quemsomosfotos',true)
                res.send(response)
            }).catch(e => console.log(e))
    }

    static update( req, res ){
        const { id  } = req.params
        
        QuemSomosFotosService
            .update( id, req.body )
            .then(response => {
                socket.emit('quemsomosfotos',true)
                res.send(response)
            })
    }

    static delete( req, res ){        
        QuemSomosFotosService
            .delete(req.params.id)
            .then(response => {
                socket.emit('quemsomosfotos',true)
                res.send(response)
            })
    }

    static findByPK( req, res ){
        QuemSomosFotosService
            .findByPK( req.params.id )
            .then(response => {
                res.send( response )
            })
    }

    static findAll(req, res){
        QuemSomosFotosService
            .findAll()
            .then(response => {
                res.send( response )
            })
    }
   

}

export {realtime} 
export default QuemSomosFotosController