import { pre } from 'restify'
import EquipeRepository from '../repository/EquipeRepository'
class PlanoTaticoService{

    static create(obj) {
        return  EquipeRepository.create( obj )
    }

    static update( id,  obj ){
       
        return EquipeRepository.update( id, obj )
    }

    static delete( id ){        
        return EquipeRepository.delete(id)
    }

    static findByPK( id ){
        return EquipeRepository.findByPK( id )
    }

    static findAll(){
        return new Promise((resolve, reject)=>{
            EquipeRepository.findAll()
                .then(response=>{
                    const list = response.map( async r => {
                        const team = await EquipeRepository.findByPK( r.parent_id )
                        if( team ) r.team = team.name
                        return r
                    })
                    resolve(list)
                })

        })
    }
    static findByArea(area){        
        return new Promise((resolve, reject)=>{
            EquipeRepository.findByArea({area_id: area})
                .then(response=>{
                    
                    const list = response.map( async r => {
                        const team = await EquipeRepository.findByPK( {id: r.parent_id} )
                        
                        if( team ) r.team = team.name
                        return r
                    })

                    let lista = Promise.all( list )
                    resolve(lista)
                })

        })
    }

    static getTeam(area){        
        return new Promise(async (resolve, reject)=>{

            const transformar = async item  =>{
                if( item.total > 0 ) item.team = await preencher( item.id )
                delete item.total
                return item
            }

            const preencher = async pai =>{
                const results = await EquipeRepository.findTeam({area, pai})
                
                const promise = results.map( transformar )
                const equipe = Promise.all( promise )
                return equipe
            }

            const array  = await preencher(0)
            resolve( array )
        })
    }

}

export default PlanoTaticoService