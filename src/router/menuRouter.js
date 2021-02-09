import Router from 'restify-router'
import {MenuController,realtime} from '../controller/MenuController'

const menuRouter = new Router.Router()

const setRealtimeMenu = socket => {
    realtime(socket)
}

menuRouter.post('', MenuController.create)
menuRouter.put('/:id', MenuController.update)
menuRouter.del('/:id', MenuController.delete)
menuRouter.get('/:id', MenuController.findByPK)
menuRouter.get('', MenuController.findAll)

export {menuRouter,setRealtimeMenu }

