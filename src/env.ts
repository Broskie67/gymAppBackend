import dotenv from 'dotenv'

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })

export const env = {
  URL: process.env.URL ?? 'http://localhost',
  HOST: process.env.HOST ?? 'localhost',
  PORT: Number(process.env.PORT ?? 3000),

  SQLSERVER_CONNECTION_STRING: (() => {
    const v = process.env.SQLSERVER_CONNECTION_STRING
    if (!v) throw new Error('SQLSERVER_CONNECTION_STRING is missing in env file')
    return v
  })(),
} as const