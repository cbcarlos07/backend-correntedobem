import Router from 'restify-router'
import {AreaFotoController, realtime} from '../controller/AreaFotoController'

const router = new Router.Router()

const realtimeAreaFoto = io => {
    realtime(io)
}
router.post('',AreaFotoController.create)
router.del('/:id', AreaFotoController.delete)
router.get('/:id', AreaFotoController.findByArea)
router.put('/:id', AreaFotoController.update)

export  {realtimeAreaFoto}
export default  router

