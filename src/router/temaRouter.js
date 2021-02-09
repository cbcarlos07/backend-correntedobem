import Router from 'restify-router'
import TemaController from '../controller/TemaController'

const router = new Router.Router()


router.post('', TemaController.create)
router.put('/:id', TemaController.update)
router.del('/:id', TemaController.delete)
router.get('/:id', TemaController.findByPK)
router.get('', TemaController.findAll)

export default router

