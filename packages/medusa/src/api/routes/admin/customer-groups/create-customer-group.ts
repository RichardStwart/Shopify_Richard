import { IsObject, IsOptional, IsString } from "class-validator"
import { Request, Response } from "express"

import { CustomerGroupService } from "../../../../services"
import { EntityManager } from "typeorm"
import { validator } from "../../../../utils/validator"

/**
 * @oas [post] /customer-groups
 * operationId: "PostCustomerGroups"
 * summary: "Create a CustomerGroup"
 * description: "Creates a CustomerGroup."
 * x-authenticated: true
 * parameters:
 *   - (body) name=* {string} Name of the customer group
 *   - (body) metadata {object} Metadata for the customer.
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in
 *       medusa.admin.customerGroups.create({
 *         name: 'VIP'
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'localhost:9000/admin/customer-groups' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "name": "VIP"
 *       }'
 * tags:
 *   - Customer Group
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             customer_group:
 *               $ref: "#/components/schemas/customer_group"
 */

export default async (req: Request, res: Response) => {
  const validated = await validator(AdminPostCustomerGroupsReq, req.body)

  const customerGroupService: CustomerGroupService = req.scope.resolve(
    "customerGroupService"
  )

  const manager: EntityManager = req.scope.resolve("manager")
  const customerGroup = await manager.transaction(
    async (transactionManager) => {
      return await customerGroupService
        .withTransaction(transactionManager)
        .create(validated)
    }
  )

  res.status(200).json({ customer_group: customerGroup })
}

export class AdminPostCustomerGroupsReq {
  @IsString()
  name: string

  @IsObject()
  @IsOptional()
  metadata?: object
}
