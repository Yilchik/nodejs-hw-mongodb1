import { registerUser } from '../services/auth.js';

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);

  res.send({
    status: 201,
    message: `Successfully created a contact!`,
    data: user,
  });
};
