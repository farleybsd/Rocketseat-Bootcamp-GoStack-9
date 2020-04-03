
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'
import Mail from '../../lib/Mail'

class CancellationMail {

    get Key() {
        return 'CancellationMail'
    }

    async handle({ data }) {

        const { appointment } = data

        console.log('Fila Execultada meu camatada -)')

        await Mail.sendMail({

            to: `${appointment.provider.name} <${appointment.provider.email}>`,
            subject: 'Agendamento Cancelado',
            template: 'cancelation',
            context: {
                provider: appointment.provider.name,
                user: appointment.user.name,
                date: format(
                    parseISO(appointment.date),
                    "'dia' dd 'de' MMMM',ás' H:mm'h' ",
                    { locale: pt }
                )
            }

        })

    }

}

export default new CancellationMail()