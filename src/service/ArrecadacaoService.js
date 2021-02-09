import ArrecadacaoRepository from '../repository/ArrecacaoRepository'
class ArrecadacaoService{

    static create(obj) {
        return  ArrecadacaoRepository.create( obj )
    }

    static update( id,  obj ){
       
        return ArrecadacaoRepository.update( id, obj )
    }

    static delete( id ){        
        return ArrecadacaoRepository.delete(id)
    }

    static findByPK( id ){
        return ArrecadacaoRepository.findByPK( id )
    }

    static findAll(){
        return ArrecadacaoRepository.findAll()
    }

}

export default ArrecadacaoService