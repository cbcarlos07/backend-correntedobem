import Router from 'restify-router'
import {AreaController, realtime} from '../controller/AreaController'

const areaRouter = new Router.Router()

const realtimeArea = io => {
    realtime(io)
}
areaRouter.post('',AreaController.create)
areaRouter.put('/:id',AreaController.update)
areaRouter.del('/:id', AreaController.delete)
areaRouter.get('/:id', AreaController.findByPK)
areaRouter.get('', AreaController.findAll)
areaRouter.get('/sub-area', AreaController.subArea)

export  {areaRouter, realtimeArea}

