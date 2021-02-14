
import Router from 'restify-router'
import initRouter from './initRouter'
import {areaRouter, realtimeArea} from './areaRouter'
import areaFotoRouter, { realtimeAreaFoto} from './areaFotoRouter'
import usuarioRouter from './usuarioRouter'
import equipeRouter, {setRealtimeEquipe} from './equipeRouter'
import {arrecadacaoRouter, setRealtimeArrecadacao} from './arrecadacaoRouter'
import {metaRouter, setRealtimeMeta} from './metaRouter'
import {menuRouter, setRealtimeMenu} from './menuRouter'
import temaRouter, {setRealtimeTema} from './temaRouter'
import emailConfigRouter from './emailConfigRouter'
import emailContactRouter from './emailContactRouter'
import {contatoRouter, setRealtimeContato} from './contatoRouter'
import redesSociaisRouter, {setRealtimeRedes} from './redesSociaisRouter'
import acoesRouter, {setRealtimeAcoes} from './acoesRouter'
import acoesItemRouter, {setRealtimeAcoesItem} from './acoesItemRouter'
import quemSomosRuter, {setRealtimeQuemSomos} from './quemSomosRouter'
import awsRouter, {setRealtimeAws} from './awsRouter'
import parceirosRouter, {setRealtimeParceiros} from './parceirosRouter'
const router = new Router.Router()
const prefix = '/api/v1'

const routes = deps => {
    
    const {server, io} = deps
    realtimeArea( io )
    setRealtimeMenu(io)
    setRealtimeArrecadacao(io)
    setRealtimeMeta(io)
    setRealtimeContato(io)
    setRealtimeRedes(io)
    setRealtimeEquipe(io)
    setRealtimeTema(io)
    realtimeAreaFoto(io)
    setRealtimeAcoes(io)
    setRealtimeAcoesItem(io)
    setRealtimeQuemSomos(io)
    setRealtimeAws(io)
    setRealtimeParceiros(io)
    router.add('/', initRouter)
    router.add(`${prefix}/area`, areaRouter)
    router.add(`${prefix}/usuario`, usuarioRouter)
    router.add(`${prefix}/equipe`, equipeRouter)
    router.add(`${prefix}/arrecadacao`, arrecadacaoRouter)
    router.add(`${prefix}/meta`, metaRouter)
    router.add(`${prefix}/menu`, menuRouter)
    router.add(`${prefix}/tema`, temaRouter)
    router.add(`${prefix}/email-config`, emailConfigRouter)
    router.add(`${prefix}/email-contact`, emailContactRouter)
    router.add(`${prefix}/contato`, contatoRouter)
    router.add(`${prefix}/redes`, redesSociaisRouter)
    router.add(`${prefix}/foto`, areaFotoRouter)
    router.add(`${prefix}/acoes`, acoesRouter)
    router.add(`${prefix}/acoes-item`, acoesItemRouter)
    router.add(`${prefix}/quem-somos`,quemSomosRuter)
    router.add(`${prefix}/aws`,awsRouter)
    router.add(`${prefix}/parceiros`,parceirosRouter)

    router.applyRoutes( server )
}



export default routes