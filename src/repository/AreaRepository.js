import Area from '../models/Area'
class AreaRepository{
    
    static create(obj) {
        return  Area.first().create( obj )
    }

    static update( id,  values ){
       
        return Area.first().update( {where: {id}, values } )
    }

    static delete( id ){        
        return Area.first().delete({where: {id}})
    }

    static findByPK( id ){
        return Area.first().find( {where: {id}} )
    }

    static findAll(){
        return Area.rows().list()
    }

    static subArea(area){
        return new Promise((resolve, reject)=>{
            Area.subArea( area )
                .then(response => {
                    resolve(response.rows)
                })

        })
    }

}

export default AreaRepository