import Equipe from '../models/Equipe'
class EquipeRepository{
    
    static create(obj) {
        return  Equipe.first().create( obj )
    }

    static update( id,  values ){
       
        return Equipe.first().update( {where: {id}, values } )
    }

    static delete( id ){        
        return Equipe.first().delete({where: {id}})
    }

    static findByPK( id ){        
        return Equipe.first().find( {where: id} )
    }

    static findByArea( id ){
        return Equipe.rows().find( {where: id} )
    }

    static findAll(){
        return Equipe.rows().list()
    }

    static findTeam(area, pai){
        return new Promise((resolve, reject)=>{
            Equipe
                .team(area, pai)
                .then(response => {
                    resolve(response.rows)
                })

        })
    }

}

export default EquipeRepository