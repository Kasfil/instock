import dotenv from 'dotenv'

dotenv.config()

export default function env(
  name:string,
  fallbackVal:string|number|string[],
  asArray:boolean = false,
  splitter:string = '|'
): string|string[]|number {
  let value: string|undefined = process.env[name]

  if (value) {
    if (asArray) {
      return value.split(splitter)
    }
    return value
  } else {
    return fallbackVal
  }
}
