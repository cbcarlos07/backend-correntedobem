
import QuemSomosService from '../service/QuemSomosService'
var socket
const realtime = io => {
    socket = io
}
class QuemSomosController {
    static create(req, res) {
        QuemSomosService
            .create( req.body )
            .then( response => {
                socket.emit('quem',true)
                res.send(response)
            }).catch(e => console.log(e))
    }

    static update( req, res ){
        const { id  } = req.params
        QuemSomosService
            .update( id, req.body )
            .then(response => {
                socket.emit('quem',true)             
                res.send(response)
            })
    }


    static findAll(req, res){
        QuemSomosService
            .findAll()
            .then(response => {
                res.send( response )
            })
    }
 

}
export { realtime }
export default QuemSomosController