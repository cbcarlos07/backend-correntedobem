import Meta from '../models/Meta'
class MetaRepository{
    
    static create(obj) {
        return  Meta.first().create( obj )
    }

    static update( id,  values ){
       
        return Meta.first().update( {where: {id}, values } )
    }

    static delete( id ){        
        return Meta.first().delete({where: {id}})
    }

    static findByPK( id ){
        return Meta.first().find( {where: {id}} )
    }

    static findAll(){
        return Meta.rows().list()
    }

}

export default MetaRepository