import model from '../../database/models';
import Helper from '../../helper/helper';

const { User } = model;

class UsersManager {

    static async signUp(req, res) {
        const { email, password, name } = req.body
        const hashPassword = Helper.hashPassword(password);
        try {
          const findUser = await User.findOne({
            where: { email }
          });
          if(findUser){
            return res.status(409).json({ message: 'User already exists.' });
          }
          await User
          .create({
            name,
            email,
            password: hashPassword
          })
          const payload = { email, name }
          const token = Helper.generateToken(payload);
          return res.status(201).send({ token, message: 'User successfully created', user: { name, email }});
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
    }

  static async login(req, res) {
    try {
        const findUser = await User.findOne({ where: { email: req.body.email }});
        if(findUser){
          const userData = {
            id: findUser.dataValues.id,
            name: findUser.dataValues.name,
            email: findUser.dataValues.email,
            password: findUser.dataValues.password
          };
          const hashPassword = findUser.dataValues.password
          const password = req.body.password
          if (Helper.comparePassword(hashPassword, password)) {
            const payload = {
              id: userData.id,
              name: userData.name,
              email: userData.email
            }
            const token = Helper.generateToken(payload);
            return res.status(200).json({
              message: 'You have been successfully logged in',
              token: token,
              user: {
                email: payload.email,
                name: payload.name,
                id: userData.id,
  
              }
            });
          }
        }
        return res.status(400).send({ message: 'Wrong email or password' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
  }
}

export default UsersManager;
