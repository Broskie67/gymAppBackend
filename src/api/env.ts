import 'dotenv/config'

export const env = { 
    URL: String(process.env.URL),
    HOST: String(process.env.HOST),
    PORT: Number(process.env.PORT) || 300,
}