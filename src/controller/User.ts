import { RequestHandler } from "express";
import UTILS from "../utils/helpers/auth";
import { User } from "../entities/User";

const signUp: RequestHandler = async (req, res) => {
  try {
    const { identifiers } = await User.insert({ ...req.body });

    const token = await UTILS.generateAuthToken(
      req.body.email,
      identifiers[0].id
    );
    res.status(201).json({ success: true, token });
  } catch (e) {
    res.status(400).send({
      success: false,
      error: {
        msg: e,
      },
    });
  }
};

const logIn: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await User.findOne({
      email,
      password,
    });

    if (!data?.email || !data.id) {
      return res.status(404).json({
        success: false,
        error: {
          msg: "USER_NOT_FOUND",
        },
      });
    }

    const token = await UTILS.generateAuthToken(data.email, data.id);
    res.json({ success: true, token });
  } catch (e) {
    res.status(404).send({
      success: false,
      error: {
        msg: e,
      },
    });
  }
};

export default {
  signUp,
  logIn,
};
