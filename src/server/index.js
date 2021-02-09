import restify from 'restify'
import cors from '../helpers/cors'
import routes from '../router'
import bodyParser from 'body-parser'
import { createRequire } from 'module'
import Realtime from '../helpers/Realtime'
import jwtMiddleware from '../config/jwtMiddleware'
const require = createRequire( import.meta.url )

const server = restify.createServer()
const io = require( 'socket.io' )( server.server, {
    cors: {
        origin: [
            'http://localhost',
            'http://localhost:5500'
        ]
    }
} )
Realtime( io )

const exclusions = ['/']

server.pre( cors.preflight )
server.pre( cors.actual )
server.use( bodyParser.json({limit: '100mb'}) )
server.use( bodyParser.urlencoded({extended: true, limit: '5000mb'}) )
//server.use( jwtMiddleware( {exclusions} ) )
routes( {server, io} )

export default server


