import Router from 'restify-router'
import {ContatoController, realtime} from '../controller/ContatoController'

const contatoRouter = new Router.Router()

const setRealtimeContato = io => {
    realtime(io)
}
contatoRouter.post('',ContatoController.create)
contatoRouter.put('/:id',ContatoController.update)
contatoRouter.get('', ContatoController.findAll)

export {contatoRouter,setRealtimeContato }

