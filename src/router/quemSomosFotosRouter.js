import Router from 'restify-router'
import QuemSomosFotosController, {realtime} from '../controller/QuemSomosFotosController'

const router = new Router.Router()

const setRealtimeQuemSomosFotos = io => {
    realtime(io)
}
router.post('',QuemSomosFotosController.create)
router.put('/:id',QuemSomosFotosController.update)
router.del('/:id', QuemSomosFotosController.delete)
router.get('/:id', QuemSomosFotosController.findByPK)
router.get('', QuemSomosFotosController.findAll)

export  {setRealtimeQuemSomosFotos}
export default router

