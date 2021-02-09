
import UsuarioService from '../service/UsuarioService'

export default class UsuarioController {
    
    static create(req, res) {
        UsuarioService
            .create( req.body )
            .then( response => {
                res.send(response)
            })
    }

    static update( req, res ){
        const { id  } = req.params        
        UsuarioService
            .update( id, req.body )
            .then(response => {
                res.send(response)
            })
    }

    static delete(req, res){
        const { id  } = req.params        
        UsuarioService
            .delete( id )
            .then(response => {
                res.send(response)
            })
    }
    static findByPK(req, res){
        const { id  } = req.params        
        UsuarioService
            .findByPK( {id} )
            .then(response => {
                res.send(response)
            })
    }
    static findAll(req, res){
        
        UsuarioService
            .findAll(  )
            .then(response => {
                res.send(response)
            })
    }
    static auth(req, res){
        
        UsuarioService
            .auth( req.body )
            .then(response => {
                res.send(response)
            })
    }

}