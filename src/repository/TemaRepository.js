import Tema from '../models/Tema'
class TemaRepository{
    
    static create(obj) {
        return  Tema.first().create( obj )
    }

    static update( id,  values ){
       
        return Tema.first().update( {where: {id}, values } )
    }

    static delete( id ){        
        return Tema.first().delete({where: {id}})
    }

    static findByPK( id ){
        return Tema.first().find( {where: {id}} )
    }

    static findAll(){
        return Tema.rows().list()
    }

}

export default TemaRepository