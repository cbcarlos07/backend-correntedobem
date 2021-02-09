import nodemailer from 'nodemailer'
import config from './config'
const transporter = async () => {
    let dados  = await config()    
    return nodemailer.createTransport( dados )

}

export default transporter