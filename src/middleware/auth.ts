import jwt from 'jsonwebtoken';
import endpoints from "../utils/config/endpoints.config"
import { User } from '../entities/User';
import { RequestHandler } from 'express';

const auth: RequestHandler = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "") ?? "";
    const decoded: any = jwt.verify(token, endpoints.JWT_ACCESS_TOKEN);

    const user = await User.findOne({
      id: decoded.id,
      email: decoded.email
    });

    if (!user) {
      throw new Error();
    }

    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

export default {
    checkAuth: auth
};
