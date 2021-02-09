
import RedesSociaisRepository from '../repository/RedesSociaisRepository'

class RedesSociaisService{
    static create(obj) {
        return RedesSociaisRepository.create( obj )
    }

    static update( id,  obj ){
        return RedesSociaisRepository.update( id, obj )
    }
    static delete( id ){        
        return RedesSociaisRepository.delete(id)
    }

    static findByPK( id ){
        return RedesSociaisRepository.findByPK( id )
    }

    static findAll(){
        return RedesSociaisRepository.findAll()
    }

}

export default RedesSociaisService