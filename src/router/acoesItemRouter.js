import Router from 'restify-router'
import AcoesItemController, {realtime} from '../controller/AcoesItemController'

const router = new Router.Router()

const setRealtimeAcoesItem = io => {
    realtime(io)
}
router.post('',AcoesItemController.create)
router.put('/:id',AcoesItemController.update)
router.del('/:id', AcoesItemController.delete)
router.get('/:id', AcoesItemController.findByPK)
router.get('', AcoesItemController.findAll)

export  {setRealtimeAcoesItem}
export default router

