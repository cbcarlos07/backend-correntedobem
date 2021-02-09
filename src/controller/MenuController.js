
import MenuService from '../service/MenuService'
let socket
const realtime = io => {
    socket = io
}

class MenuController {
    static create(req, res) {
        MenuService
            .create( req.body )
            .then( response => {
                socket.emit('menu', true)
                res.send(response)
            })
    }

    static update( req, res ){
        const { id  } = req.params
        
        MenuService
            .update( id, req.body )
            .then(response => {
                socket.emit('menu', true)
                res.send(response)
            })
    }

    static delete( req, res ){        
        MenuService
            .delete(req.params.id)
            .then(response => {
                socket.emit('menu', true)
                res.send(response)
            })
    }

    static findByPK( req, res ){
        MenuService
            .findByPK( req.params.id )
            .then(response => {
                res.send( response )
            })
    }

    static findAll(req, res){
        MenuService
            .findAll()
            .then(response => {
                res.send( response )
            })

    }

}
export {realtime, MenuController} 