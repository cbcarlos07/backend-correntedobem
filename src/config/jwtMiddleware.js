import jwt from 'jsonwebtoken'

const jwtMiddleware = (deps) => {
    return async (req, res, next) => {
      let site = req.href().indexOf( 'site' )
      let foto = req.href().indexOf('foto')
      
      if ( !deps.exclusions.includes(req.href() ) && site == -1 && foto == -1 ) {
        const token = req.headers['x-access-token']
        if (!token) {
          res.send(403, {error: 'Token não fornecido'})
          return false
        }
  
        try {
          req.decoded = jwt.verify(token, process.env.JWT_SECRET)
        } catch (error) {
          res.send(403, { error: 'Falha ao autenticar o token' })
          return false
        }
      }
      next()
    }
  }
export default jwtMiddleware  