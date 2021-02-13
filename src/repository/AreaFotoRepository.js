import AreaFoto from '../models/AreaFoto'
class AreaFotoRepository{
    
    static create(obj) {
        return  AreaFoto.first().create( obj )
    }

    static update( id,  values ){  
        return AreaFoto.first().update( {where: {id}, values } )
    }
   

    static delete( id ){        
        return AreaFoto.first().delete({where: {id}})
    }

    static findByPK( id ){
        return AreaFoto.first().find( {where: {id}} )
    }

    static findByArea( id ){
        return AreaFoto.rows().find( {where: { area_id: id}} )
    }



}

export default AreaFotoRepository