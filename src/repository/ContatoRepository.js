import Contato from '../models/Contato'
class ContatoRepository{
    
    static create(obj) {
        return  Contato.first().create( obj )
    }

    static update( id,  values ){
       
        return Contato.first().update( {where: {id}, values } )
    }
    
    static findAll(){
        return Contato.rows().list()
    }

    static findByPK( id ){
        return Area.first().find( {where: {id}} )
    }


}

export default ContatoRepository