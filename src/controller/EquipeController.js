
import EquipeService from '../service/EquipeService'
var socket
const realtime = io =>{
    socket = io
}

export {realtime}
export default class PlanoTaticoController {
    static create(req, res) {
        EquipeService
            .create( req.body )
            .then( response => {
                socket.emit('equipe', true)
                res.send(response)
            })
    }

    static update( req, res ){
        const { id  } = req.params
        
        EquipeService
            .update( id, req.body )
            .then(response => {
                socket.emit('equipe', true)
                res.send(response)
            })
    }

    static delete( req, res ){        
        EquipeService
            .delete(req.params.id)
            .then(response => {
                socket.emit('equipe', true)
                res.send(response)
            })
    }

    static findByPK( req, res ){
        EquipeService
            .findByPK( {id: req.params.id} )
            .then(response => {
                
                res.send( response )
            })
    }

    static findAll(req, res){
        EquipeService
            .findAll()
            .then(response => {
                res.send( response )
            })
    }
    static findByArea(req, res){
        EquipeService
            .findByArea(req.params.id)
            .then(response => {
                res.send( response )
            })
    }

    static getTeam( req, res ){
        EquipeService
            .getTeam(req.params.id)
            .then(response => {
                res.send( response )
            })
    }

    static removerFoto(req, res){
        EquipeService
        .removerFoto(req.params.id)
        .then(response => {
            res.send( response )
        })
    }

}