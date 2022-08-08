import { Request, Response } from "express"

import { CustomerGroupService } from "../../../../services"
import { FindParams } from "../../../../types/common"

/**
 * @oas [get] /customer-groups/{id}
 * operationId: "GetCustomerGroupsGroup"
 * summary: "Retrieve a CustomerGroup"
 * description: "Retrieves a Customer Group."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Customer Group.
 *   - (query) expand {string} (Comma separated) Which fields should be expanded in the customer group.
 *   - (query) fields {string} (Comma separated) Which fields should be included in the customer group.
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in
 *       medusa.admin.customerGroups.retrieve(customer_group_id)
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'localhost:9000/admin/customer-groups/{id}' \
 *       --header 'Authorization: Bearer {api_token}'
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
  const { id } = req.params

  const customerGroupService: CustomerGroupService = req.scope.resolve(
    "customerGroupService"
  )

  const customerGroup = await customerGroupService.retrieve(
    id,
    req.retrieveConfig
  )

  res.json({ customer_group: customerGroup })
}

export class AdminGetCustomerGroupsGroupParams extends FindParams {}
