import Router from 'restify-router'
import EmailContactController from '../controller/EmailContactController'

const router = new Router.Router()

router.post('', EmailContactController.create)
router.put('/:id', EmailContactController.update)
router.del('/:id', EmailContactController.delete)
router.get('/:id', EmailContactController.findByPK)
router.get('', EmailContactController.findAll)
router.get('/reenviar/:id', EmailContactController.reenviar)

export default router

