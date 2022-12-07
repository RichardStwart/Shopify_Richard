import { asFunction, asValue } from "awilix"
import { trackInstallation } from "medusa-telemetry"
import { ConfigModule, Logger, MedusaContainer } from "../types/global"
import { ModulesHelper } from "../utils/module-helper"

type Options = {
  container: MedusaContainer
  configModule: ConfigModule
  logger: Logger
}

export const moduleHelper = new ModulesHelper()

export default async ({
  container,
  configModule,
  logger,
}: Options): Promise<void> => {
  const moduleResolutions = configModule?.moduleResolutions ?? {}

  for (const resolution of Object.values(moduleResolutions)) {
    try {
      const loadedModule = await import(resolution.resolutionPath!)
      const moduleLoaders = loadedModule?.loaders || []
      for (const loader of moduleLoaders) {
        await loader({ container, configModule, logger })
      }

      const moduleService = loadedModule?.service || null

      if (!moduleService) {
        throw new Error(
          "No service found in module. Make sure that your module exports a service."
        )
      }

      container.register({
        [resolution.definition.registrationName]: asFunction(
          (cradle) => new moduleService(cradle, configModule)
        ).singleton(),
      })

      const installation = {
        module: resolution.definition.key,
        resolution: resolution.resolutionPath,
      }

      trackInstallation(installation, "module")
    } catch (err) {
      console.error(err)

      if (resolution.definition.isRequired) {
        throw new Error(
          `Could not resolve required module: ${resolution.definition.label}`
        )
      }

      logger.warn(`Couldn not resolve module: ${resolution.definition.label}.`)
    }
  }

  moduleHelper.setModules(moduleResolutions)

  container.register({
    modulesHelper: asValue(moduleHelper),
  })
}
