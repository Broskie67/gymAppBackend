import express, { Application, Request, Response } from 'express';
import { env } from './env'

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World with TypeScript and Express!');
});

app.listen(env.PORT, env.HOST, () => { 
     console.log(`Server running at http://${env.HOST}:${env.PORT}`)
})