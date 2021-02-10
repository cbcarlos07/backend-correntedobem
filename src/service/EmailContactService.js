import EmailContactRepository from '../repository/EmailContactRepository'
import {enviarEmail, enviarEmailParaEquipe} from '../helpers/email'
class AreaService{

    static create(obj) {
        return new Promise((resolve, reject)=>{
            EmailContactRepository.create( obj )
                .then(async response => {
                    enviarEmail(response.insertId)
                    resolve({status: true})
                })

        })
    }

    

    static reenviar(id){
        return new Promise( (resolve, reject)=>{
            enviarEmailParaEquipe( id )
            resolve({status: true})
        })
    }

    static update( id,  obj ){
       
        return EmailContactRepository.update( id, obj )
    }

    static delete( id ){        
        return EmailContactRepository.delete(id)
    }

    static findByPK( id ){
        return EmailContactRepository.findByPK( id )
    }

    static findAll(){
        return EmailContactRepository.findAll()
    }

}

export default AreaService