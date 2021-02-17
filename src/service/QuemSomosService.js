import QuemSomosRepository from '../repository/QuemSomosRepository'
import shortId from 'shortid'
import FileHelper from './../helpers/FileHelper'
class QuemSomosService{

    static create(obj) {
        return new Promise((resolve, reject)=>{
            let image         = obj.image
            let imageNameFile = `${shortId.generate()}.png`
            obj.image= imageNameFile
            QuemSomosRepository
                .create(obj)
                .then(response => {
                    FileHelper.convertToImg( imageNameFile, image )
                    resolve(response)
                })


        })
    }

    static update( id,  obj ){
       return new Promise(async(resolve, reject)=>{
        let image = ''
        let imageNameFile = ''
        if(obj.image){
             let objQuemSomos = await this.findByPK( id )
             if( objQuemSomos.image != null )
                FileHelper.remove( objQuemSomos.image )
             image         = obj.image
             imageNameFile = `${shortId.generate()}.png`
             obj.image= imageNameFile
             
        }
           QuemSomosRepository
            .update( id, obj )
            .then(response => {
                if(obj.image) FileHelper.convertToImg( imageNameFile, image )
                resolve(response)
            })


       })
    }


    static findAll(){
        return QuemSomosRepository.findAll()
    }

    static findByPK( id ){
        return QuemSomosRepository.findByPK( id )
    }
    
    
}

export default QuemSomosService