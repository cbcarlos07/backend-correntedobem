import Acoes from '../models/Acoes'
class AcoesRepository{
    
    static create(obj) {
        return  Acoes.first().create( obj )
    }

    static update( id,  values ){
       
        return Acoes.first().update( {where: {id}, values } )
    }

    static findAll(){
        return Acoes.rows().list()
    }

}

export default AcoesRepository