import Aws from '../models/Aws'
class AwsRepository{
    
    static create(obj) {
        return  Aws.first().create( obj )
    }

    static update( id,  values ){
       
        return Aws.first().update( {where: {id}, values } )
    }

    static findAll(){
        return Aws.rows().list()
    }

}

export default AwsRepository