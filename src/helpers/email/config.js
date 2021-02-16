
import EmailConfigService from '../../service/EmailConfigService'
const config = async () =>{
    
    let objConfig = await EmailConfigService.findByPK(1)
    
    return {
        name: objConfig.name,
        host: objConfig.host,
        port: objConfig.port,
        secure: false,
        auth: {
            user: objConfig.username,
            pass: objConfig.password,
        },
        tls: {
            rejectUnauthorized: false
        }
    }

}
export default config
