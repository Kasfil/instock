import knex from 'knex'
import configData from 'configs/config'
import { connectionInterface } from '@intfc/databases'

import type { ConfigValueType } from 'configs/config'

class database {
  private driver: string
  private client: string
  private user: string
  private password: string
  private database: string
  private port: number

  constructor(name: string = 'default') {
    const databaseConfig: ConfigValueType = configData.Databases
    const connectionData: ConfigValueType = databaseConfig[name]
  }
}

export default database
