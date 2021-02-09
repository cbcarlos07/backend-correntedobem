import Router from 'restify-router'
import {MetaController, realtime} from '../controller/MetaController'

const metaRouter = new Router.Router()

const setRealtimeMeta = io =>{
    realtime(io)
}

metaRouter.post('', MetaController.create)
metaRouter.put('/:id', MetaController.update)
metaRouter.del('/:id', MetaController.delete)
metaRouter.get('/:id', MetaController.findByPK)
metaRouter.get('', MetaController.findAll)

export {metaRouter,setRealtimeMeta }

