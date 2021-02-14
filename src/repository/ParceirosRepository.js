import Parceiros from '../models/Parceiros'
class ParceirosRepository{
    
    static create(obj) {
        return  Parceiros.first().create( obj )
    }

    static update( id,  values ){
       
        return Parceiros.first().update( {where: {id}, values } )
    }

    static delete( id ){        
        return Parceiros.first().delete({where: {id}})
    }

    static findByPK( id ){
        return Parceiros.first().find( {where: {id}} )
    }

    static findAll(){
        return Parceiros.rows().list()
    }

}

export default ParceirosRepository