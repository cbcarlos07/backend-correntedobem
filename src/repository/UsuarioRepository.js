import Usuario from '../models/Usuario'
class UsuarioRepository{
    
    static create(obj) {
        return  Usuario.first().create( obj )
    }

    static update( id,  values ){
       
        return Usuario.first().update( {where: {id}, values } )
    }

    static delete( id ){        
        return Usuario.first().delete({where: {id}})
    }

    static findByPK( id ){
        return Usuario.first().find( {where: id} )
    }

    static findAll(){
        return Usuario.rows().list()
    }

}

export default UsuarioRepository