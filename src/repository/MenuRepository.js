import Menu from '../models/Menu'
class MenuRepository{
    
    static create(obj) {
        return  Menu.first().create( obj )
    }

    static update( id,  values ){
       
        return Menu.first().update( {where: {id}, values } )
    }

    static delete( id ){        
        return Menu.first().delete({where: {id}})
    }

    static findByPK( id ){
        return Menu.first().find( {where: {id}} )
    }

    static findAll(){
        return new Promise((resolve, reject)=>{
            Menu.list('ORDER BY order_item').then( response=> {
                resolve(response.rows)
            })
        })
    }

}

export default MenuRepository