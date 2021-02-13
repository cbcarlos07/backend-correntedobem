import Router from 'restify-router'
import QuemSomosController, {realtime} from '../controller/QuemSomosController'

const router = new Router.Router()
const setRealtimeQuemSomos = io =>{
    realtime(io)
}
router.post('',QuemSomosController.create)
router.put('/:id',QuemSomosController.update)
router.get('', QuemSomosController.findAll)
export { setRealtimeQuemSomos }
export default router

