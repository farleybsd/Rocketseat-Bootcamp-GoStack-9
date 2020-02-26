import User from '../models/User'

class UserController {

    async Store(req, res) {

        const UserExists = await User.findOne({ where: { email: req.body.email } })

        if (UserExists) {
            return res.status(400).json({ error: 'Usuário já existe.' });

        }
        const { id, name, email, provider } = await User.create(req.body)

        return res.json({
            id, name, email, provider
        })
    }

}

export default new UserController()