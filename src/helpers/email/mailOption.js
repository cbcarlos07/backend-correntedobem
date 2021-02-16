import EmailConfigService from '../../service/EmailConfigService'
const mailOptionConfig = async () => {
    let objConfig = await EmailConfigService.findByPK(1)
    return {
        from: objConfig.username,
        to: 'carlos@teste.com',
        subject: 'ASSUNTO',
        html: 'Corpo da mensagem',
        attachments: []
    }
}

export default mailOptionConfig