const socket = io => {
    io.on('connection', socket =>{
        console.log('conected',socket.id);
        socket.on('posts', msg => {
            socket.broadcast.emit( 'posts', msg )
        })
        socket.on('menu', msg => {
            socket.broadcast.emit( 'menu', msg )
        })
        socket.on('transp', msg => {
            socket.broadcast.emit( 'transp', msg )
        })
        socket.on('meta', msg => {
            socket.broadcast.emit( 'meta', msg )
        })
        socket.on('redes', msg => {
            socket.broadcast.emit( 'redes', msg )
        })
        socket.on('contato', msg => {
            socket.broadcast.emit( 'contato', msg )
        })
        socket.on('equipe', msg => {
            socket.broadcast.emit( 'equipe', msg )
        })
        socket.on('tema', msg => {
            socket.broadcast.emit( 'tema', msg )
        })
        socket.on('foto', msg => {
            socket.broadcast.emit( 'foto', msg )
        })
        socket.on('acoes', msg => {
            socket.broadcast.emit( 'acoes', msg )
        })
        socket.on('acoes-item', msg => {
            socket.broadcast.emit( 'acoes-item', msg )
        })
        socket.on('quem', msg => {
            socket.broadcast.emit( 'quem', msg )
        })
        socket.on('parceiros', msg => {
            socket.broadcast.emit( 'parceiros', msg )
        })
        socket.on('quemsomosfotos', msg => {
            socket.broadcast.emit( 'quemsomosfotos', msg )
        })
    })
}

export default socket