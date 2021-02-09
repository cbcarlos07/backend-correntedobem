import Router from 'restify-router'
import UsuarioController from '../controller/UsuarioController'

const router = new Router.Router()



router.post('', UsuarioController.create)
router.put('/:id', UsuarioController.update)
router.del('/:id', UsuarioController.delete)
router.get('/:id', UsuarioController.findByPK)
router.get('', UsuarioController.findAll)

export default router

