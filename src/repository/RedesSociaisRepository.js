import RedesSociais from '../models/RedesSociais'
class RedesSociaisRepository{
    
    static create(obj) {
        return  RedesSociais.first().create( obj )
    }

    static update( id,  values ){
       
        return RedesSociais.first().update( {where: {id}, values } )
    }

    static delete( id ){        
        return RedesSociais.first().delete({where: {id}})
    }

    static findByPK( id ){
        return RedesSociais.first().find( {where: id} )
    }

    static findAll(){
        return RedesSociais.rows().list()
    }

}

export default RedesSociaisRepository