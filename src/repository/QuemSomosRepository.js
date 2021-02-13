import QuemSomos from '../models/QuemSomos'
class QuemSomosRepository{
    
    static create(obj) {
        return  QuemSomos.first().create( obj )
    }

    static update( id,  values ){
       
        return QuemSomos.first().update( {where: {id}, values } )
    }
    
    static findAll(){
        return QuemSomos.rows().list()
    }

    static findByPK( id ){
        return QuemSomos.first().find( {where: {id}} )
    }


}

export default QuemSomosRepository