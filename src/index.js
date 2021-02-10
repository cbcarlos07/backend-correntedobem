import 'dotenv/config'
import server from './server'
import { env } from 'process'

const PORT = env.SERVER_PORT || 80

server.listen( '0.0.0.0',PORT, () =>{
    console.log(`API rodando da porta ${PORT}` );
})

