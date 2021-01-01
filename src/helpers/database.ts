import knex from 'knex'
import { connectionInterface } from 'interfaces/databases'

class database {
  private connectionData: connectionInterface

  constructor(connectionData: connectionInterface) {
    this.connectionData = connectionData
  }

  createConnection(): knex {
    switch (this.connectionData.client) {
      case 'mysql':
        return this.knexMysql()
      case 'sqlite':
        return this.knexSqlite()
      default:
        throw new Error('Client unknown')
    }
  }

  knexMysql(): knex {
    const connData = this.connectionData
    const instance = knex({
      client: connData.client,
      connection: {
        host: connData.host,
        user: connData.user,
        password: connData.password,
        database: connData.database
      }
    })

    return instance
  }

  knexSqlite(): knex {
    const connData = this.connectionData
    const instance = knex({
      client: connData.client,
      connection: {
        filename: '@dataPath/sqlite/' + connData.filename
      }
    })

    return instance
  }
}

export default database
