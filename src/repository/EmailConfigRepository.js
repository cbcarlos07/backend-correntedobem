import EmailConfig from '../models/EmailConfig'
class EmailConfigRepository{
    
    static create(obj) {
        return  EmailConfig.first().create( obj )
    }

    static update( id,  values ){
       
        return EmailConfig.first().update( {where: {id}, values } )
    }
    
    static findAll(){
        return EmailConfig.rows().list()
    }

    static findByPK( id ){
        return EmailConfig.first().find( {where: {id}} )
    }


}

export default EmailConfigRepository