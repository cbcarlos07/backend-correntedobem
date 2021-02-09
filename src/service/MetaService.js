import MetaRepository from '../repository/MetaRepository'
import FileHelper from './../helpers/FileHelper'
import shortId from 'shortid'
class MetaService{

    static create(obj) {
        return  new Promise((resolve, reject) => {
            let logo  = ''
            let logoNameFile = ''
            
            if( obj.logo ){
                logo = obj.logo
                logoNameFile = `${shortId.generate()}.png`
                obj.logo  = logoNameFile
            }
            
            let image = ''
            let imgNameFile = ''            
            if( obj.image ){
                image = obj.image
                imgNameFile = `${shortId.generate()}.png`
                obj.image = imgNameFile
            }
            MetaRepository.create( obj )
                .then(response => {                    
                    if( obj.logo ) FileHelper.convertToImg( logoNameFile, logo )
                    if( obj.image ) FileHelper.convertToImg( imgNameFile, image )                    
                    resolve(response)
                })
        })            
    }

    static update( id,  obj ){
       
        return new Promise(async (resolve, reject)=>{
            let dados = await this.findByPK(id)
            let logo  = ''
            let image = ''
            let logoNameFile = ''
            let imgNameFile = ''
            if( obj.logo ){
                logo = obj.logo
                FileHelper.remove( dados.logo )
                logoNameFile = `${shortId.generate()}.png`
                obj.logo  = logoNameFile
            }

            if( obj.image ){
                image = obj.image
                FileHelper.remove( dados.image )
                imgNameFile = `${shortId.generate()}.png`
                obj.image = imgNameFile
            }
            MetaRepository
                .update( id, obj )
                .then(response => {
                    if( obj.logo ) FileHelper.convertToImg( logoNameFile, logo )
                    if( obj.image ) FileHelper.convertToImg( imgNameFile, image )
                    resolve(response)
                })
        })
    }

    static delete( id ){        
        return MetaRepository.delete(id)
    }

    static findByPK( id ){
        return MetaRepository.findByPK( id )
    }

    static findAll(){
        return MetaRepository.findAll()
    }

}

export default MetaService