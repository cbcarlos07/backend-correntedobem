import AreaRepository from '../repository/AreaRepository'
import shortId from 'shortid'
import FileHelper from './../helpers/FileHelper'
class AreaService{

    static create(obj) {
        return new Promise((resolve, reject)=>{
            let logo         = ''
            let logoNameFile = ''
            if( obj.logo ){
                logo         = obj.logo
                logoNameFile = `${shortId.generate()}.png`
                obj.logo= logoNameFile
            }
            let icon = ''
            let iconNameFile = ''
            if( obj.icon ){
                icon         = obj.icon
                iconNameFile = `${shortId.generate()}.png`
                obj.icon= iconNameFile
            }
            AreaRepository
                .create( obj )
                .then(response => {
                    if( obj.logo ) FileHelper.convertToImg( logoNameFile, logo )
                    if( obj.icon ) FileHelper.convertToImg( iconNameFile, icon )
                    resolve(response)
                })
        })
    }

    static update( id,  obj ){
       return new Promise(async (resolve, reject)=>{
           let logo = ''
           let logoNameFile = ''
           if(obj.logo){
                let objArea = await this.findByPK( id )
                FileHelper.remove( objArea.logo )
                logo         = obj.logo
                logoNameFile = `${shortId.generate()}.png`
                obj.logo= logoNameFile
                
           }
           let icon = ''
           let iconNameFile = ''
           if(obj.icon){
                let objArea = await this.findByPK( id )
                FileHelper.remove( objArea.icon )
                icon         = obj.icon
                iconNameFile = `${shortId.generate()}.png`
                obj.icon= iconNameFile
                
           }
           AreaRepository
                .update( id, obj )
                .then(response => {
                    if(obj.logo) FileHelper.convertToImg( logoNameFile, logo )
                    if(obj.icon) FileHelper.convertToImg( iconNameFile, icon )
                    resolve( response )
                })
       })
    }

    static delete( id ){        
        return new Promise(async(resolve, reject)=>{
            let objArea = await this.findByPK( id )
            AreaRepository
                .delete(id)
                .then(response => {
                    FileHelper.remove( objArea.logo )
                    FileHelper.remove( objArea.icon )
                    resolve(response)
                })
        })
        
    }

    static findByPK( id ){
        return AreaRepository.findByPK( id )
    }

    static findAll(){
        return new Promise((resolve, reject)=>{
            AreaRepository
                .findAll()
                .then( response => {
                    let lista = response.map( async r => {
                        let dad = await this.findByPK( r.parent_id )
                        if( dad ) r.pai = dad.title
                        
                        return r
                    } )
                    let list = Promise.all( lista )
                    resolve(list)
                } )

        })
    }
    
    static subArea(){
        return new Promise(async (resolve, reject)=>{

            const transformar = async item  =>{
                if( item.total > 0 ) item.subarea = await preencher( item.id )
                delete item.total
                return item
            }

            const preencher = async pai =>{
                const results = await AreaRepository.subArea(pai)
                
                const promise = results.map( transformar )
                const subarea = Promise.all( promise )
                return subarea
            }

            const array  = await preencher(0)
            resolve( array )
        })
    }
}

export default AreaService