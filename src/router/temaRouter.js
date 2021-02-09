import Router from 'restify-router'
import TemaController, {realtime} from '../controller/TemaController'

const router = new Router.Router()

const setRealtimeTema = io => {
    realtime(io)
}
router.post('', TemaController.create)
router.put('/:id', TemaController.update)
router.del('/:id', TemaController.delete)
router.get('/:id', TemaController.findByPK)
router.get('', TemaController.findAll)

export { setRealtimeTema }
export default router

