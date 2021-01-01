import { connectionInterface } from 'interfaces/databases'
import env from 'helpers/env'

export const main: connectionInterface = {
  client: 'mysql',
  host: env('DB_DEFAULT_HOST', 'localhost'),
  user: env('DB_DEFAULT_USER', 'root'),
  password: env('DB_DEFAULT_PASS', ''),
  database: env('DB_DEFAULT_DATABASE', 'belanja'),
  charset: 'utf8mb4'
}
