import Arrecadacao from '../models/Arrecadacao'
class ArrecadacaoRepository{
    
    static create(obj) {
        return  Arrecadacao.first().create( obj )
    }

    static update( id,  values ){
       
        return Arrecadacao.first().update( {where: {id}, values } )
    }

    static delete( id ){        
        return Arrecadacao.first().delete({where: {id}})
    }

    static findByPK( id ){
        return Arrecadacao.first().find( {where: {id}} )
    }

    static findAll(){
        return Arrecadacao.rows().list()
    }

}

export default ArrecadacaoRepository