import Router from 'restify-router'
import EmailConfigController from '../controller/EmailConfigController'

const router = new Router.Router()

router.post('',EmailConfigController.create)
router.put('/:id',EmailConfigController.update)
router.get('', EmailConfigController.findAll)

export default router

