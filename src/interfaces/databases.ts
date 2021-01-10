export interface connectionInterface {
  client: string,
  database: string,
  user?: string,
  password?: string,
  host?: string,
  port?: number,
  charset?: string,
  timezone?: string,
  filename?: string
}
