import restify from 'restify'
import cors from '../helpers/cors'
import routes from '../router'
import bodyParser from 'body-parser'
import { createRequire } from 'module'
import Realtime from '../helpers/Realtime'
import jwtMiddleware from '../config/jwtMiddleware'
import helmet        from 'helmet'
const require = createRequire( import.meta.url )

const server = restify.createServer()
const io = require( 'socket.io' )( server.server, {
    cors: {
        origin: [
            'http://localhost',
            'http://localhost:5500',
            'http://54.236.26.100',
            'http://site.correntedobemsos.com.br'
        ]
    }
} )
Realtime( io )

const exclusions = ['/','/auth']

server.pre( cors.preflight )
server.pre( cors.actual )
server.use( bodyParser.json({limit: '100mb'}) )
server.use( bodyParser.urlencoded({extended: true, limit: '5000mb'}) )
server.use( jwtMiddleware( {exclusions} ) )
server.use( helmet() )
routes( {server, io} )

export default server


