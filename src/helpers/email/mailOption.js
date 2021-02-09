import EmailConfigService from '../../service/EmailConfigService'
const mailOption = async () => {
    let objConfig = await EmailConfigService.findByPK(1)
    return {
        from: objConfig.email,
        to: 'carlos@teste.com',
        subject: 'ASSUNTO',
        html: 'Corpo da mensagem',
        attachments: []
    }
}

export default mailOption