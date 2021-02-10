import 'dotenv/config'
import server from './server'
import { env } from 'process'

const PORT = env.PORT || 3006

server.listen( ,PORT,'0.0.0.0', () =>{
    console.log(`API rodando da porta ${PORT}` );
})

