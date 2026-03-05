import express, { Application, Request, Response } from 'express'
import { env } from './env'
import { getPool } from './db'

const app: Application = express()

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World with TypeScript and Express!')
})

app.get('/health/db', async (_req: Request, res: Response) => {
  const pool = await getPool()
  const result = await pool.request().query('SELECT 1 AS ok')
  console.log("Succes")
  res.json({ db: result.recordset[0] })
})

app.listen(env.PORT, env.HOST, () => {
  console.log(`Server running at http://${env.HOST}:${env.PORT}`)
})