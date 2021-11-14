import jwt from 'jsonwebtoken'
import ENDPOINTS from "../config/endpoints.config"

const generateAuthToken = (email: string, id: number) => {
  const token = jwt.sign(
    { email, id },
    ENDPOINTS.JWT_ACCESS_TOKEN
  );

  return token;
}

export default {
    generateAuthToken
}