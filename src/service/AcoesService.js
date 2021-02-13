import AcoesRepository from '../repository/AcoesRepository'

class AcoesService{

    static create(obj) {
        return AcoesRepository.create( obj )
    }

    static update( id,  obj ){
       return AcoesRepository.update( id, obj )
    }

    static findAll(){
        return AcoesRepository.findAll()
    }
    
}

export default AcoesService