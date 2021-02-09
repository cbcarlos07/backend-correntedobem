import MenuRepository from '../repository/MenuRepository'
class AreaService{

    static create(obj) {
        return  MenuRepository.create( obj )
    }

    static update( id,  obj ){
       
        return MenuRepository.update( id, obj )
    }

    static delete( id ){        
        return MenuRepository.delete(id)
    }

    static findByPK( id ){
        return MenuRepository.findByPK( id )
    }

    static findAll(){
        return MenuRepository.findAll()
    }

}

export default AreaService