import Router from 'restify-router'
import AcoesController, {realtime} from '../controller/AcoesController'

const router = new Router.Router()

const setRealtimeAcoes = io => {
    realtime(io)
}
router.post('',AcoesController.create)
router.put('/:id',AcoesController.update)
router.get('', AcoesController.findAll)

export  { setRealtimeAcoes }
export default router

