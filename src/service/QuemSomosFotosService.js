import QuemSomosFotosRepositoryRepository from '../repository/QuemSomosFotosRepository'
import shortId from 'shortid'
import FileHelper from './../helpers/FileHelper'
class QuemSomosFotosServiceService{

    static create(obj) {
        return new Promise(async(resolve, reject)=>{
            let photo         = ''
            let photoNameFile = ''
            if( obj.photo ){
                photo         = obj.photo
                photoNameFile = `${shortId.generate()}.png`
                obj.photo= photoNameFile
            }
            QuemSomosFotosRepositoryRepository
                .create( obj )
                .then(response => {
                    if( obj.photo ) FileHelper.convertToImg( photoNameFile, photo )
                    resolve(response)
                })

        })
    }

    static update( id,  obj ){
       return new Promise(async(resolve, reject)=>{
            let photo = ''
            let photoNameFile = ''
            let objQuemSomosFotos = await this.findByPK( id )
            if(obj.photo){
                if( objQuemSomosFotos.photo != null ){
                    FileHelper.remove( objQuemSomosFotos.photo )    
                }
                photo         = obj.photo
                photoNameFile = `${shortId.generate()}.png`
                obj.photo= photoNameFile
            }     
            QuemSomosFotosRepositoryRepository
            .update( id, obj )
            .then(response=> {
                if(obj.photo) FileHelper.convertToImg( photoNameFile, photo )
                resolve( response )
            })

       })
    }

    static delete( id ){        
        return new Promise(async(resolve, reject)=>{
            let objAreaFoto = await this.findByPK( id )
            QuemSomosFotosRepositoryRepository
                .delete(id)
                .then(response => {
                    if( objAreaFoto.foto != null )
                        FileHelper.remove( objAreaFoto.foto )
                    resolve(response)
                })

        })
    }

    static findByPK( id ){
        return QuemSomosFotosRepositoryRepository.findByPK( id )
    }

    static findAll(){
        return QuemSomosFotosRepositoryRepository.findAll()
    }
    
}

export default QuemSomosFotosServiceService