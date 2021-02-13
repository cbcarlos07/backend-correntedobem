import AreaFotoRepository from '../repository/AreaFotoRepository'
import shortId from 'shortid'
import FileHelper from './../helpers/FileHelper'
class AreaFotoService{

    static create(obj) {
        
        return new Promise((resolve, reject)=>{
            let foto         = ''
            let fotoNameFile = ''
            if( obj.foto ){
                foto         = obj.foto
                fotoNameFile = `${shortId.generate()}.png`
                obj.foto= fotoNameFile
            }
            
            AreaFotoRepository
                .create( obj )
                .then(response => {
                    if( obj.foto ) FileHelper.convertToImg( fotoNameFile, foto )
                    resolve(response)
                })
        })
    }

    static update( id,  obj ){
        
        return new Promise(async (resolve, reject)=>{
            let foto = ''
            let fotoNameFile = ''
            let objAreaFoto = await this.findByPK( id )
            if(obj.foto){
                 if( objAreaFoto.foto != null ){
                     FileHelper.remove( objAreaFoto.foto )    
                 }
                 foto         = obj.foto
                 fotoNameFile = `${shortId.generate()}.png`
                 obj.foto= fotoNameFile
                 
            }
            
            AreaFotoRepository
                 .update( id, obj )
                 .then(response => {
                     if(obj.foto) FileHelper.convertToImg( fotoNameFile, foto )
                     
                     resolve( response )
                 })
        })
     }
 

    static delete( id ){        
        return new Promise(async(resolve, reject)=>{
            let objAreaFoto = await this.findByPK( id )
            AreaFotoRepository
                .delete(id)
                .then(response => {
                    if( objAreaFoto.foto != null )
                        FileHelper.remove( objAreaFoto.foto )
                    resolve(response)
                })
        })
        
    }

    static findByArea( id ){
        return AreaFotoRepository.findByArea( id )
    }

    static findByPK( id ){
        return AreaFotoRepository.findByPK( id )
    }

}

export default AreaFotoService