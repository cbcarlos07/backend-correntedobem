import mailOption from './mailOption'
import transporter from './transporter'
import path, {dirname} from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url';
import handlebars from 'handlebars'
import EmailConfigService from '../../service/EmailConfigService'
import EmailContactService from '../../service/EmailContactService'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const enviarEmailParaContato =  id => {
    return new Promise(async (resolve, reject)=>{

        let objConfig      = await EmailConfigService.findByPK(1)
        let objContato     = await EmailContactService.findByPK(id)
        mailOption.subject = objConfig.subject_response
        mailOption.to      = objContato.email
        
        const templateFile = path.resolve(__dirname,'template-response.html')
        const templateData = fs.readFileSync( templateFile, {encoding: 'utf-8'} )
        const template     = handlebars.compile(templateData.toString())
        const logo         = `${objConfig.url}/foto/${objConfig.logo}`
        const html         = template({
                                        name: objContato.name, 
                                        content: objConfig.text_response,
                                        img: logo
                                    })
        mailOption.html    = html
        let transport = await transporter()

        transport.sendMail( mailOption, async (error, info) =>{
            if(error){
                console.log('Problema no envio', error.message);
                resolve({status: false} )
            }
            console.log('E-mail para Contato enviado');
            resolve( {status: true} )
        })
    })
}

const enviarEmailParaEquipe = id => {
    return new Promise(async (resolve, reject)=>{

        let objConfig      = await EmailConfigService.findByPK(1)
        let objContato     = await EmailContactService.findByPK(id)
        mailOption.subject = objConfig.subject_send
        mailOption.to      = objConfig.email
        mailOption.cc      = objConfig.copy
    
        const templateFile = path.resolve(__dirname,'template-send.html')
        const templateData = fs.readFileSync( templateFile, {encoding: 'utf-8'} )
        const template     = handlebars.compile(templateData.toString())
        const logo         = `${objConfig.url}/foto/${objConfig.logo}`
        const html         = template({
                                        name:    objContato.name, 
                                        email:   objContato.email, 
                                        content: objConfig.text_send,
                                        detail:  objContato.message,
                                        img:     logo
                                    })
        mailOption.html    = html
        let transport = await transporter()
        transport.sendMail( mailOption, async (error, info) =>{
            if(error){
                console.log('Equipe: Problema no envio', error.message);
                resolve({status: false} )
            }
            console.log('Equipe: E-mail para Contato enviado');
            resolve( {status: true} )
        })
    })
}


const enviarEmail = async id => {
    await enviarEmailParaContato(id)
    await enviarEmailParaEquipe(id)
}

export {enviarEmailParaContato,enviarEmailParaEquipe, enviarEmail}

