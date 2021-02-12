import TemaRepository from '../repository/TemaRepository'
import shortId from 'shortid'
import FileHelper from './../helpers/FileHelper'
class TemaService{

    static create(obj) {
        return new Promise((resolve, reject)=>{
            let logo =''
            let logoNameFile = ''
            let image = ''
            let imgNameFile = ''
            if( obj.logo ){
                logo         = obj.logo
                logoNameFile = `${shortId.generate()}.png`
                obj.logo         = logoNameFile
            }

            if( obj.image ){
                image         = obj.logo
                imgNameFile = `${shortId.generate()}.png`
                obj.image         = imgNameFile
            }

            TemaRepository.create( obj )
                .then(response => {
                    if(obj.logo)  FileHelper.convertToImg( logoNameFile, logo )
                    if(obj.image)  FileHelper.convertToImg( logoNameFile, image )
                    resolve(response)
                })
            
        })
    }

    static update( id,  obj ){
       return new Promise(async(resolve, reject)=>{
            let logo = ''
            let logoNameFile = ''
            let image = ''
            let imgNameFile = ''
            let objTema = await this.findByPK( id )
            if(obj.logo){
                if( objTema.logo || objTema.logo != null ){
                    FileHelper.remove( objTema.logo )
                }
                logo         = obj.logo
                logoNameFile = `${shortId.generate()}.png`
                obj.logo= logoNameFile
                
           }
            if( obj.image || objTema.image != null){
                if(objTema.image){
                    FileHelper.remove( objTema.logo )
                    
                }
                image         = obj.image
                imgNameFile = `${shortId.generate()}.png`
                obj.image         = imgNameFile
            }
            console.log('obj editar',obj);
           TemaRepository.update( id, obj )
            .then(response =>{
                if(obj.logo) FileHelper.convertToImg( logoNameFile, logo )
                if(obj.image) FileHelper.convertToImg( imgNameFile, image )
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