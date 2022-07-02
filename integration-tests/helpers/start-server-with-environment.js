const setupServer = require("./setup-server")
const { initDb } = require("./use-db")

const startServerWithEnvironment = async ({ cwd, verbose, env }) => {
  if (env) {
    Object.entries(env).forEach(([key, value]) => {
      process.env[key] = value
    })
  }

  const dbConnection = await initDb({
    cwd,
  })

  const medusaProcess = await setupServer({
    cwd,
    verbose,
    env,
  })

  return [medusaProcess, dbConnection]
}

export default startServerWithEnvironment
