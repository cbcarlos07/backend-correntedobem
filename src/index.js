import 'dotenv/config'
import server from './server'
import { env } from 'process'
import './helpers/MySQL'

const PORT = env.SERVER_PORT

server.listen( PORT, () =>{
    console.log(`API rodando da porta ${PORT}` );
})

