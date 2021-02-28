import Router from 'restify-router'
import restify from 'restify'
import path from 'path'
import fs from 'fs'
import axios from 'axios'
import UsuarioController from '../controller/UsuarioController'
import { AreaController } from '../controller/AreaController'
import { MenuController } from '../controller/MenuController'
import { ArrecadacaoController } from '../controller/ArrecadacaoController'
import  EmailContactController from '../controller/EmailContactController'
import  { ContatoController } from '../controller/ContatoController'
import   RedesSociaisController  from '../controller/RedesSociaisController'
import {MetaController} from '../controller/MetaController'
import TemaController from '../controller/TemaController'
import EquipeController from '../controller/EquipeController'
import AcoesController from '../controller/AcoesController'
import AcoesItemController from '../controller/AcoesItemController'
import QuemSomosController from '../controller/QuemSomosController'
import {AreaFotoController} from '../controller/AreaFotoController'
import ParceirosController from '../controller/ParceirosController'
import QuemSomosFotosController from '../controller/QuemSomosFotosController'
const router = new Router.Router()

router.get('', (req, res, next)=>{
    res.send({msg: 'API Corrente do bem'})
    next()
})

router.post('auth', UsuarioController.auth )

/*router.get('foto/*', restify.plugins.serveStatic({
    directory: path.resolve('./public'),
    appendRequestPath: false
}))*/

router.get('foto/:image', async (req, res, next)=>{
    const {image} = req.params
    const host = process.env.HOSTAWS

    axios
        .get(`${host}/${image}`, {
            responseType: 'arraybuffer'
        })
        .then(response => {
            //Buffer.from(response.data, 'binary').toString('base64')
            const fileContent = Buffer.from(response.data, 'binary')
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.write(fileContent, 'binary');
            res.end(null, 'binary');
            next()

        }).catch(e => {
            console.log('Imagem não encontrada')
            res.send( {msg: 'Imagem não encontrada'} )
            next()
        })


})

router.get('site/area', AreaController.subArea)
router.get('site/area/:id', AreaController.findByPK)
router.get('site/menu', MenuController.findAll)
router.get('site/arrecadacao', ArrecadacaoController.findAll)
router.post('site/email', EmailContactController.create)
router.get('site/contato', ContatoController.findAll)
router.get('site/redes', RedesSociaisController.findAll)
router.get('site/meta', MetaController.findAll)
router.get('site/tema', TemaController.findAll)
router.get('site/equipe/:id', EquipeController.getTeam)
router.get('site/foto/:id', AreaFotoController.findByArea)
router.get('site/acoes', AcoesController.findAll)
router.get('site/acoes-item', AcoesItemController.findAll)
router.get('site/quem-somos', QuemSomosController.findAll)
router.get('site/parceiros', ParceirosController.findAll)
router.get('site/quem-somos-fotos', QuemSomosFotosController.findAll)

export default router
