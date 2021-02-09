import Router from 'restify-router'
import restify from 'restify'
import path from 'path'
import UsuarioController from '../controller/UsuarioController'
import { AreaController } from '../controller/AreaController'
import { MenuController } from '../controller/MenuController'
import { ArrecadacaoController } from '../controller/ArrecadacaoController'
import  EmailContactController from '../controller/EmailContactController'
import  { ContatoController } from '../controller/ContatoController'
import   RedesSociaisController  from '../controller/RedesSociaisController'
import {MetaController} from '../controller/MetaController'
const router = new Router.Router()

router.get('', (req, res, next)=>{
    res.send({msg: 'API Corrente do bem'})
    next()
})

router.post('auth', UsuarioController.auth )

router.get('foto/*', restify.plugins.serveStatic({
    directory: path.resolve('./public'),
    appendRequestPath: false
}))

router.get('site/area', AreaController.subArea)
router.get('site/area/:id', AreaController.findByPK)
router.get('site/menu', MenuController.findAll)
router.get('site/arrecadacao', ArrecadacaoController.findAll)
router.post('site/email', EmailContactController.create)
router.get('site/contato', ContatoController.findAll)
router.get('site/redes', RedesSociaisController.findAll)
router.get('site/meta', MetaController.findAll)

export default router
