import EmailConfigRepository from '../repository/EmailConfigRepository'
import shortId from 'shortid'
import FileHelper from './../helpers/FileHelper'
class EmailConfigService{

    static create(obj) {
        return new Promise((resolve, reject)=>{
            let logo         = obj.logo
            let logoNameFile = `${shortId.generate()}.png`
            obj.logo= logoNameFile
            EmailConfigRepository
                .create(obj)
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
             let objArea = await this.findByPK( id )
             FileHelper.remove( objArea.logo )
             logo         = obj.logo
             logoNameFile = `${shortId.generate()}.png`
             obj.logo= logoNameFile
             
        }
           EmailConfigRepository
            .update( id, obj )
            .then(response => {
                if(obj.logo) FileHelper.convertToImg( logoNameFile, logo )
                resolve(response)
            })


       })
    }


    static findAll(){
        return EmailConfigRepository.findAll()
    }

    static findByPK( id ){
        return EmailConfigRepository.findByPK( id )
    }
    
    
}

export default EmailConfigService