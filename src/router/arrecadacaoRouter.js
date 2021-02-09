import Router from 'restify-router'
import {ArrecadacaoController, realtime} from '../controller/ArrecadacaoController'

const arrecadacaoRouter = new Router.Router()

const setRealtimeArrecadacao = io => {
    realtime(io)
}

arrecadacaoRouter.post('', ArrecadacaoController.create)
arrecadacaoRouter.put('/:id', ArrecadacaoController.update)
arrecadacaoRouter.del('/:id', ArrecadacaoController.delete)
arrecadacaoRouter.get('/:id', ArrecadacaoController.findByPK)
arrecadacaoRouter.get('', ArrecadacaoController.findAll)

export {arrecadacaoRouter,setRealtimeArrecadacao}

