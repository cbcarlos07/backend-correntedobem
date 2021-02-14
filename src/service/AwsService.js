import AwsRepository from '../repository/AwsRepository'

class AwsService{

    static create(obj) {
        return AwsRepository.create( obj )
    }

    static update( id,  obj ){
       return AwsRepository.update( id, obj )
    }

    static findAll(){
        return AwsRepository.findAll()
    }
    
}

export default AwsService