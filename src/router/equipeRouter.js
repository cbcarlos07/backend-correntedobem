import Router from 'restify-router'
import EquipeContrller, {realtime} from '../controller/EquipeController'

const router = new Router.Router()

const setRealtimeEquipe = io => {
    realtime(io)
}

router.post('', EquipeContrller.create)
router.put('/:id', EquipeContrller.update)
router.del('/:id', EquipeContrller.delete)
router.get('/:id', EquipeContrller.findByPK)
router.get('/team/:id', EquipeContrller.getTeam)
router.get('/team/area/:id', EquipeContrller.findByArea)
router.get('', EquipeContrller.findAll)
router.get('/remover-foto/:id', EquipeContrller.removerFoto)

export {setRealtimeEquipe}
export default router

