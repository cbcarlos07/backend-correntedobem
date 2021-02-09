import TemaRepository from '../repository/TemaRepository'
import shortId from 'shortid'
import FileHelper from './../helpers/FileHelper'
class TemaService{

    static create(obj) {
        return new Promise((resolve, reject)=>{
            let logo         = obj.logo
            let logoNameFile = `${shortId.generate()}.png`
            obj.logo         = logoNameFile
            TemaRepository.create( obj )
                .then(response => {
                    FileHelper.convertToImg( logoNameFile, logo )
                    resolve(response)
                })
            
        })
    }

    static update( id,  obj ){
       return new Promise(async(resolve, reject)=>{
            let logo = ''
            let logoNameFile = ''
            if(obj.logo){
                let objTema = await this.findByPK( id )
                FileHelper.remove( objTema.logo )
                logo         = obj.logo
                logoNameFile = `${shortId.generate()}.png`
                obj.logo= logoNameFile
                
           }
           TemaRepository.update( id, obj )
            .then(response =>{
                if(obj.logo) FileHelper.convertToImg( logoNameFile, logo )
                resolve( response )
            })

       })
    }

    static delete( id ){        
        return TemaRepository.delete(id)
    }

    static findByPK( id ){
        return TemaRepository.findByPK( id )
    }

    static findAll(){
        return TemaRepository.findAll()
    }

}

export default TemaService