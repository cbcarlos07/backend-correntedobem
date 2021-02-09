
import UsuariocRepository from '../repository/UsuarioRepository'
import jwt from 'jsonwebtoken'
import md5 from 'md5'
class UsuariocService{
    static create(obj) {
        return new Promise((resolve, rejecet)=>{
            obj.password = md5( obj.password )
            UsuariocRepository
                .create( obj )
                .then( response =>{
                    resolve(response)
                })

        })

                    
    }

    static update( id,  obj ){
        return new Promise((resolve, reject)=>{
            if(obj.password) obj.password = md5( obj.password )
            UsuariocRepository
                .update( id, obj )
                .then( response =>{
                    resolve(response)
                })

        })
    }
    static delete( id ){        
        return UsuariocRepository.delete(id)
    }

    static findByPK( id ){
        return UsuariocRepository.findByPK( id )
    }

    static findAll(){
        return UsuariocRepository.findAll()
    }

    static auth(params){
        const senha = md5( params.password )
        return new Promise((resolve, reject)=>{
            UsuariocRepository
                .findByPK({email: params.email, password: senha})
                .then( response =>{
                    let obj = {status: false}
                    if( response ){
                        obj = {
                            id: response.id,
                            name: response.name,
                            email: response.email
                        }
                        const token = jwt.sign( obj, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24} )
                        obj.token = token
                        obj.status = true
                    }
                    resolve( obj )

                })

        })
    }
 

}

export default UsuariocService