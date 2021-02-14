
import AwsService from '../service/AwsService'
let socket
const realtime = io => {
    socket = io
}

class AwsServiceController {
    static create(req, res) {
        AwsService
            .create( req.body )
            .then( response => {
                socket.emit('aws',true)
                res.send(response)
            }).catch(e => console.log(e))
    }

    static update( req, res ){
        const { id  } = req.params
        
        AwsService
            .update( id, req.body )
            .then(response => {
                socket.emit('aws',true)
                res.send(response)
            })
    }


    static findAll(req, res){
        AwsService
            .findAll()
            .then(response => {
                res.send( response )
            })
    }

}

export { realtime} 
export default AwsServiceController