import AcoesItem from '../models/AcoesItem'
class AcoesItemRepository{
    
    static create(obj) {
        return  AcoesItem.first().create( obj )
    }

    static update( id,  values ){
       
        return AcoesItem.first().update( {where: {id}, values } )
    }

    static delete( id ){        
        return AcoesItem.first().delete({where: {id}})
    }

    static findByPK( id ){
        return AcoesItem.first().find( {where: {id}} )
    }

    static findAll(){
        return AcoesItem.rows().list()
    }

}

export default AcoesItemRepository