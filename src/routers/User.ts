import express from "express";
import userControllers from '../controller/User'
import validatePayload from "../middleware/validatePayload";
import userPayloadValidator from "../utils/validator/userRoutes"

const router = express.Router();

router.post("/signup", validatePayload(userPayloadValidator.signup), userControllers.signUp);
router.post("/login", userControllers.logIn);

export default router
