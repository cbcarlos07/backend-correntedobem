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
            let image_small = ''
            let imgSmallNameFile = ''
            if( obj.logo ){
                logo         = obj.logo
                logoNameFile = `${shortId.generate()}.png`
                obj.logo         = logoNameFile
            }

            if( obj.image ){
                image         = obj.image
                imgNameFile = `${shortId.generate()}.png`
                obj.image         = imgNameFile
            }

            if( obj.image_small ){
                image_small         = obj.image_small
                imgSmallNameFile = `${shortId.generate()}.png`
                obj.image_small         = imgSmallNameFile
            }

            TemaRepository.create( obj )
                .then(response => {
                    if(obj.logo)  FileHelper.convertToImg( logoNameFile, logo )
                    if(obj.image)  FileHelper.convertToImg( logoNameFile, image )
                    if(obj.image_small)  FileHelper.convertToImg( logoNameFile, image_small )
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
            let image_small = ''
            let imgSmallNameFile = ''
            let objTema = await this.findByPK( id )
            //console.log('objTema',objTema);
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
                    FileHelper.remove( objTema.image )
                    
                }
                image         = obj.image
                imgNameFile = `${shortId.generate()}.png`
                obj.image         = imgNameFile
            }
            if( obj.image_small || objTema.image_small != null){
                if(objTema.image_small){
                    FileHelper.remove( objTema.image_small )
                    
                }
                image_small         = obj.image_small
                imgSmallNameFile = `${shortId.generate()}.png`
                obj.image_small         = imgSmallNameFile
            }
          //  console.log('obj editar',obj);
           TemaRepository.update( id, obj )
            .then(response =>{
                if(obj.logo) FileHelper.convertToImg( logoNameFile, logo )
                if(obj.image) FileHelper.convertToImg( imgNameFile, image )
                if(obj.image_small) FileHelper.convertToImg( imgSmallNameFile, image_small )
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