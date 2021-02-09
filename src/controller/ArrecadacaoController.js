
import ArrecadacaoService from '../service/ArrecadacaoService'
let socket
const realtime = io => {
    socket = io
}

class ArrecadacaoController {
    static create(req, res) {
        ArrecadacaoService
            .create( req.body )
            .then( response => {
                socket.emit('transp', true)
                res.send(response)
            })
    }

    static update( req, res ){
        const { id  } = req.params
        
        ArrecadacaoService
            .update( id, req.body )
            .then(response => {
                socket.emit('transp', true)
                res.send(response)
            })
    }

    static delete( req, res ){        
        ArrecadacaoService
            .delete(req.params.id)
            .then(response => {
                res.send(response)
            })
    }

    static findByPK( req, res ){
        ArrecadacaoService
            .findByPK( req.params.id )
            .then(response => {
                res.send( response )
            })
    }

    static findAll(req, res){
        ArrecadacaoService
            .findAll()
            .then(response => {
                res.send( response )
            })

    }

}
export {realtime, ArrecadacaoController} 