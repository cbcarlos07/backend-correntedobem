import Router from 'restify-router'
import RedesSociaisController, {realtime} from '../controller/RedesSociaisController'

const router = new Router.Router()


const setRealtimeRedes = io => {
    realtime(io)
} 
router.post('', RedesSociaisController.create)
router.put('/:id', RedesSociaisController.update)
router.del('/:id', RedesSociaisController.delete)
router.get('/:id', RedesSociaisController.findByPK)
router.get('', RedesSociaisController.findAll)

export {setRealtimeRedes}
export default router

