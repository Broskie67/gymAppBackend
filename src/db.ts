import sql from 'mssql'
import { env } from './env'

let poolPromise: Promise<sql.ConnectionPool> | null = null

export function getPool() {
  if (!poolPromise) {
    poolPromise = new sql.ConnectionPool(env.SQLSERVER_CONNECTION_STRING).connect()
  }
  return poolPromise
}