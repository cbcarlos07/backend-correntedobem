import mailOptionConfig from './mailOption'
import transporter from './transporter'
import path, {dirname} from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url';
import handlebars from 'handlebars'
import EmailConfigService from '../../service/EmailConfigService'
import EmailContactService from '../../service/EmailContactService'
import FileHelper from '../FileHelper';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const enviarEmailParaContato =  id => {
    return new Promise(async (resolve, reject)=>{
        const mailOption = await mailOptionConfig()
        let objConfig      = await EmailConfigService.findByPK(1)
        let objContato     = await EmailContactService.findByPK(id)

        //await FileHelper.downloadImage( objConfig.logo )
        const logoName = objConfig.logo

        mailOption.subject = objConfig.subject_response
        mailOption.to      = objContato.email
        mailOption.attachments = [
            {
                filename: 'logo.png',
                path: `https://correntedobem.s3.amazonaws.com/${logoName}`,
                cid: 'logo'
            }
        ]
        
        const templateFile = path.resolve(__dirname,'template-response.html')
        const templateData = fs.readFileSync( templateFile, {encoding: 'utf-8'} )
        const template     = handlebars.compile(templateData.toString())
        const logo         = `cid:logo`
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
            }else{
                console.log('Contato: E-mail  enviado',info);
                resolve( {status: true} )
            }
        })
    })
}

const enviarEmailParaEquipe = id => {
    return new Promise(async (resolve, reject)=>{
        const mailOption = await mailOptionConfig()
        let objConfig      = await EmailConfigService.findByPK(1)
        let objContato     = await EmailContactService.findByPK(id)

        //await FileHelper.downloadImage( objConfig.logo )
        const logoName = objConfig.logo
        mailOption.subject     = objConfig.subject_send
        mailOption.to          = objConfig.email
        mailOption.cc          = objConfig.copy.split(',')
        mailOption.attachments = [
                                    {
                                        filename: 'logo.png',
                                        path: `https://correntedobem.s3.amazonaws.com/${logoName}`,
                                        cid: 'logo'
                                    }
                                ]
    
        const templateFile = path.resolve(__dirname,'template-send.html')
        const templateData = fs.readFileSync( templateFile, {encoding: 'utf-8'} )
        const template     = handlebars.compile(templateData.toString())
        const logo         = `cid:logo`
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
            }else{
                console.log('Equipe: E-mail enviado',info);
                resolve( {status: true} )
            }
        })
    })
}


const enviarEmail = async id => {
    await enviarEmailParaContato(id)
    await enviarEmailParaEquipe(id)
}

export {enviarEmailParaContato,enviarEmailParaEquipe, enviarEmail}

