import { connectionInterface } from '@intfc/databases'
import env from '@common/env'

export const main: connectionInterface = {
  client: 'mysql',
  host: env('DB_DEFAULT_HOST', 'localhost').toString(),
  user: env('DB_DEFAULT_USER', 'B3lanja_root_user').toString(),
  password: env('DB_DEFAULT_PASS', '').toString(),
  database: 'belanja_core',
  charset: 'utf8mb4'
}
