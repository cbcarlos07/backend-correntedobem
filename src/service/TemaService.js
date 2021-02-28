import TemaRepository from '../repository/TemaRepository'
import shortId from 'shortid'
import FileHelper from './../helpers/FileHelper'
class TemaService{

    static create(obj) {
        return new Promise((resolve, reject)=>{
            let logo =''
            let logo_es =''
            let logo_en =''
            let logoNameFile = ''
            let logoEsNameFile = ''
            let logoEnNameFile = ''
            let image = ''
            let imgNameFile = ''
            let image_small = ''
            let imgSmallNameFile = ''
            if( obj.logo ){
                logo         = obj.logo
                logoNameFile = `${shortId.generate()}.png`
                obj.logo         = logoNameFile
            }
            if( obj.logo_en ){
                logo_es        = obj.logo_es
                logoEsNameFile = `${shortId.generate()}.png`
                obj.logo_es         = logoEsNameFile
            }
            if( obj.logo_en ){
                logo_en         = obj.logo_en
                logoEnNameFile = `${shortId.generate()}.png`
                obj.logo_en         = logoEnNameFile
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
            let logo_es = ''
            let logo_en = ''
            let logoNameFile = ''
            let logoEsNameFile = ''
            let logoEnNameFile = ''
            let image = ''
            let imgNameFile = ''
            let image_small = ''
            let imgSmallNameFile = ''
            let objTema = await this.findByPK( id )
            //console.log('objTema',objTema);
            if(obj.logo){
                if( objTema.logo != null ){
                    FileHelper.remove( objTema.logo )
                }
                logo         = obj.logo
                logoNameFile = `${shortId.generate()}.png`
                obj.logo= logoNameFile
                
           }
            if(obj.logo_es){
                if( objTema.logo_es != null ){
                    FileHelper.remove( objTema.logo_es )
                }
                logo_es         = obj.logo_es
                logoEsNameFile = `${shortId.generate()}.png`
                obj.logo_es= logoEsNameFile
                
           }
            if(obj.logo_en){
                if( objTema.logo_en != null ){
                    FileHelper.remove( objTema.logo_en )
                }
                logo_en         = obj.logo_en
                logoEnNameFile = `${shortId.generate()}.png`
                obj.logo_en= logoEnNameFile
                
           }
            if( obj.image ){
                if(objTema.image != null){
                    FileHelper.remove( objTema.image )
                    
                }
                image         = obj.image
                imgNameFile = `${shortId.generate()}.png`
                obj.image         = imgNameFile
            }
            if( obj.image_small){
                
                if(objTema.image_small != null){
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
                if(obj.logo_es) FileHelper.convertToImg( logoEsNameFile, logo_es )
                if(obj.logo_en) FileHelper.convertToImg( logoEnNameFile, logo_en )
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