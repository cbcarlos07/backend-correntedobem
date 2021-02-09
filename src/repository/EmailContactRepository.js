import EmailContact from '../models/EmailContact'
class EmailContactRepository{
    
    static create(obj) {
        return  EmailContact.first().create( obj )
    }

    static update( id,  values ){
       
        return EmailContact.first().update( {where: {id}, values } )
    }

    static delete( id ){        
        return EmailContact.first().delete({where: {id}})
    }

    static findByPK( id ){
        return EmailContact.first().find( {where: {id}} )
    }

    static findAll(){
        return EmailContact.rows().list()
    }

}

export default EmailContactRepository