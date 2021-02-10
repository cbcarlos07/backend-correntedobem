
import EmailContactService from '../service/EmailContactService'

export default class EmailContactController {
    static create(req, res) {
        EmailContactService
            .create( req.body )
            .then( response => {
                res.send(response)
            })
    }

    static reenviar(req, res){
        
        EmailContactService
            .reenviar(req.params.id)
            .then(response => {
                res.send( response )
            })
    }

    static update( req, res ){
        const { id  } = req.params
        
        EmailContactService
            .update( id, req.body )
            .then(response => {
                res.send(response)
            })
    }

    static delete( req, res ){        
        EmailContactService
            .delete(req.params.id)
            .then(response => {
                res.send(response)
            })
    }

    static findByPK( req, res ){
        EmailContactService
            .findByPK( req.params.id )
            .then(response => {
                res.send( response )
            })
    }

    static findAll(req, res){
        EmailContactService
            .findAll()
            .then(response => {
                res.send( response )
            })

    }

}