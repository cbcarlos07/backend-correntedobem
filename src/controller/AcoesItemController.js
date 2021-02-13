
import AcoesItemService from '../service/AcoesItemService'
let socket
const realtime = io => {
    socket = io
}

class AcoesItemController {
    static create(req, res) {
        AcoesItemService
            .create( req.body )
            .then( response => {
                socket.emit('acoes-item',true)
                res.send(response)
            }).catch(e => console.log(e))
    }

    static update( req, res ){
        const { id  } = req.params
        
        AcoesItemService
            .update( id, req.body )
            .then(response => {
                socket.emit('acoes-item',true)
                res.send(response)
            })
    }

    static delete( req, res ){        
        AcoesItemService
            .delete(req.params.id)
            .then(response => {
                socket.emit('acoes-item',true)
                res.send(response)
            })
    }

    static findByPK( req, res ){
        AcoesItemService
            .findByPK( req.params.id )
            .then(response => {
                res.send( response )
            })
    }

    static findAll(req, res){
        AcoesItemService
            .findAll()
            .then(response => {
                res.send( response )
            })
    }
   

}

export {realtime} 
export default AcoesItemController