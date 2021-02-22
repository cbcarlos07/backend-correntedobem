
import EquipeRepository from '../repository/EquipeRepository'
import shortId from 'shortid'
import FileHelper from './../helpers/FileHelper'
class PlanoTaticoService{

    static create(obj) {
        return new Promise((resolve, reject)=>{
            let photo = ''
            let photoNameFile = ''
            if(obj.photo){
                photo         = obj.photo
                photoNameFile = `${shortId.generate()}.png`
                obj.photo= photoNameFile
            }
            EquipeRepository.create( obj )
                .then(response=>{
                    if(obj.photo) FileHelper.convertToImg( photoNameFile, photo )
                    resolve(response)
                })
        })
    }

    static update( id,  obj ){
        
        return new Promise(async (resolve, reject)=>{
            let photo = ''
            let photoNameFile = ''
            if(obj.photo){
                
                
                let objEquipe = await this.findByPK( {id} )
                
                if( objEquipe.photo != null )
                    FileHelper.remove( objEquipe.photo )
                photo         = obj.photo
                photoNameFile = `${shortId.generate()}.png`
                obj.photo= photoNameFile
            }
            EquipeRepository.update( id, obj )
                .then(response => {
                    if(obj.photo) FileHelper.convertToImg( photoNameFile, photo )
                    resolve(response)
                })

        })
       
    }

    static delete( id ){        
        return new Promise(async(resolve, reject)=>{
            let objEquipe = await this.findByPK( id )
            EquipeRepository
                .delete(id)
                .then(response=> {
                    if( objEquipe.photo != null )
                        FileHelper.remove( objEquipe.photo )
                    resolve(response)
                })

        })
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