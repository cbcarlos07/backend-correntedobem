import ParceirosRepository from '../repository/ParceirosRepository'
import shortId from 'shortid'
import FileHelper from './../helpers/FileHelper'
class ParceirosService{

    static create(obj) {
        return new Promise((resolve, reject)=>{
            let image         = ''
            let imageNameFile = ''
            if( obj.image ){
                image         = obj.image
                imageNameFile = `${shortId.generate()}.png`
                obj.image= imageNameFile
            }
            ParceirosRepository
                .create( obj )
                .then(response => {
                    if( obj.image ) FileHelper.convertToImg( imageNameFile, image )
                    resolve(response)
                })

        })
    }

    static update( id,  obj ){
       return new Promise(async (resolve, reject)=>{
            let image = ''
            let imageNameFile = ''
            let objAreaimage = await this.findByPK( id )
            if(obj.image){
                if( objAreaimage.image != null ){
                    FileHelper.remove( objAreaimage.image )    
                }
                image         = obj.image
                imageNameFile = `${shortId.generate()}.png`
                obj.foto= imageNameFile
                
            }
            ParceirosRepository.update( id, obj )
                .then(response => {
                    if(obj.foto) FileHelper.convertToImg( imageNameFile, image )
                    resolve(response)
                })
        
       })
    }

    static delete( id ){
        return new Promise(async (resolve, reject)=>{
            let objAreaFoto = await this.findByPK( id )
            ParceirosRepository.delete(id)
                .then(response=>{
                    if( objAreaFoto.image != null )
                        FileHelper.remove( objAreaFoto.image )
                    
                    resolve(response)    
                })

        })
    }

    static findByPK( id ){
        return ParceirosRepository.findByPK( id )
    }

    static findAll(){
        return ParceirosRepository.findAll()
    }

}

export default ParceirosService