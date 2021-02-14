import Router from 'restify-router'
import ParceirosController, {realtime} from '../controller/ParceirosController'

const router = new Router.Router()

const setRealtimeParceiros = socket => {
    realtime(socket)
}

router.post('', ParceirosController.create)
router.put('/:id', ParceirosController.update)
router.del('/:id', ParceirosController.delete)
router.get('/:id', ParceirosController.findByPK)
router.get('', ParceirosController.findAll)

export {setRealtimeParceiros }
export default router

