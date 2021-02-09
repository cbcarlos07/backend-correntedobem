
import EmailConfigService from '../service/EmailConfigService'

class EmailConfigController {
    static create(req, res) {
        EmailConfigService
            .create( req.body )
            .then( response => {
                
                res.send(response)
            }).catch(e => console.log(e))
    }

    static update( req, res ){
        const { id  } = req.params
        
        EmailConfigService
            .update( id, req.body )
            .then(response => {                
                res.send(response)
            })
    }


    static findAll(req, res){
        EmailConfigService
            .findAll()
            .then(response => {
                res.send( response )
            })
    }
 

}

export default EmailConfigController