declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_RESULTADOS: string
      NODE_ENV: 'development' | 'production'
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }
