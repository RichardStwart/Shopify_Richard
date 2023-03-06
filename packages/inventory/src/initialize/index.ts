import {
  ExternalModuleDeclaration,
  InternalModuleDeclaration,
  MedusaModule,
} from "@medusajs/modules-sdk"
import { IEventBusService, IInventoryService } from "medusa-core-utils"
import { InventoryServiceInitializeOptions } from "../types"

export const initialize = async (
  options?: InventoryServiceInitializeOptions | ExternalModuleDeclaration,
  injectedDependencies?: {
    eventBusService: IEventBusService
  }
): Promise<IInventoryService> => {
  const serviceKey = "inventoryService"
  const loaded = await MedusaModule.bootstrap(
    serviceKey,
    "@medusajs/inventory",
    options as InternalModuleDeclaration | ExternalModuleDeclaration,
    injectedDependencies
  )

  return loaded[serviceKey] as IInventoryService
}
