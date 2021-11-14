// echo .env
import dotenv from 'dotenv';
dotenv.config();

export default {
  DB_HOST: process.env.DB_HOST ?? "",
  DB_NAME: process.env.DB_NAME ?? "",
  DB_USERNAME: process.env.DB_USERNAME ?? "",
  DB_PASSWORD: process.env.DB_PASSWORD ?? "",
  JWT_ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN ?? "",
};
