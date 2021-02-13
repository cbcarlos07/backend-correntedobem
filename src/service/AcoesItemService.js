import AcoesItemRepositoryRepository from '../repository/AcoesItemRepository'

class AcoesItemServiceService{

    static create(obj) {
        return AcoesItemRepositoryRepository.create( obj )
    }

    static update( id,  obj ){
       return AcoesItemRepositoryRepository.update( id, obj )
    }

    static delete( id ){        
        return AcoesItemRepositoryRepository.delete(id)
    }

    static findByPK( id ){
        return AcoesItemRepositoryRepository.findByPK( id )
    }

    static findAll(){
        return AcoesItemRepositoryRepository.findAll()
    }
    
}

export default AcoesItemServiceService