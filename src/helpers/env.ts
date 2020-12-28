import dotenv from 'dotenv'

dotenv.config()

export default function env(name:string, fallbackVal:string): string {
  let value: string|undefined = process.env[name]

  if (value) {
    return value
  } else {
    return fallbackVal
  }
}
