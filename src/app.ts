import express, { Application, Request, Response } from "express";
import { createConnection } from "typeorm";
import cors from 'cors'
import ENDPOINTS from './utils/config/endpoints.config'

// entities
import { User } from "./entities/User";

//routers
import userRouter from "./routers/User"

const app: Application = express();
const port = 8080;

// Use to establish a remote connection
createConnection({
  type: "mysql",
//   host: ENDPOINTS.DB_HOST,
  database: ENDPOINTS.DB_NAME,
  username:ENDPOINTS.DB_USERNAME,
  password: ENDPOINTS.DB_PASSWORD,
  logging: true,
  synchronize: true,
  entities: [User],
});

app.use(cors());
app.use(express.json({ limit: "10mb" }));

//appending routers to app
app.use('/user', userRouter);

app.get("/", (req: Request, res: Response) => {
  return res.send("it's up and away");
});

app.post('/user', async (req: Request, res: Response) => {
    User.insert(req.body)
})

app.listen(port, () => console.log(`Server up and running on ${port}`));
