import QuemSomosFotos from '../models/QuemSomosFotos'
class QuemSomosFotosRepository{
    
    static create(obj) {
        return  QuemSomosFotos.first().create( obj )
    }

    static update( id,  values ){
       
        return QuemSomosFotos.first().update( {where: {id}, values } )
    }

    static delete( id ){        
        return QuemSomosFotos.first().delete({where: {id}})
    }

    static findByPK( id ){
        return QuemSomosFotos.first().find( {where: {id}} )
    }

    static findAll(){
        return QuemSomosFotos.rows().list()
    }

}

export default QuemSomosFotosRepository