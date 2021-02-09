import ContatoRepository from '../repository/ContatoRepository'
class ContatoService{

    static create(obj) {
        return  ContatoRepository.create(obj)
    }

    static update( id,  obj ){
       return ContatoRepository.update( id, obj )
    }


    static findAll(){
        return ContatoRepository.findAll()
    }

    static findByPK( id ){
        return AreaRepository.findByPK( id )
    }
    
    
}

export default ContatoService