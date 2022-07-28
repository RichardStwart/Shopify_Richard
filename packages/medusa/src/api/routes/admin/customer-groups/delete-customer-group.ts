import { Request, Response } from "express"

import { CustomerGroupService } from "../../../../services"

/**
 * @oas [delete] /customer-groups/{id}
 * operationId: "DeleteCustomerGroupsCustomerGroup"
 * summary: "Delete a CustomerGroup"
 * description: "Deletes a CustomerGroup."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Customer Group
 * tags:
 *   - Customer Group
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             id:
 *               type: string
 *               description: The ID of the deleted customer group.
 *             object:
 *               type: string
 *               description: The type of the object that was deleted.
 *               default: customer_group
 *             deleted:
 *               type: boolean
 *               description: Whether the customer group was deleted successfully or not.
 */

export default async (req: Request, res: Response) => {
  const { id } = req.params

  const customerGroupService: CustomerGroupService = req.scope.resolve(
    "customerGroupService"
  )

  await customerGroupService.delete(id)

  res.json({
    id: id,
    object: "customer_group",
    deleted: true,
  })
}
