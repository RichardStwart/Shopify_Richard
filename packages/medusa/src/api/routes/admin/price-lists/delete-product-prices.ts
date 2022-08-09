import { EntityManager } from "typeorm"
import PriceListService from "../../../../services/price-list"

/**
 * @oas [delete] /price-lists/{id}/products/{product_id}/prices
 * operationId: "DeletePriceListsPriceListProductsProductPrices"
 * summary: "Delete all the prices related to a specific product in a price list"
 * description: "Delete all the prices related to a specific product in a price list"
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Price List that the Money Amounts that will be deleted belongs to.
 *   - (path) product_id=* {string} The ID of the product from which the money amount will be deleted.
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.priceLists.deleteProductPrices(price_list_id, product_id)
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request DELETE 'https://medusa-url.com/admin/price-lists/{id}/products/{product_id}/prices' \
 *       --header 'Authorization: Bearer {api_token}'
 * tags:
 *   - Price List
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *              ids:
 *               type: array
 *               description: The price ids that have been deleted.
 *               items:
 *                 type: string
 *              object:
 *                type: string
 *                description: The type of the object that was deleted.
 *                default: money-amount
 *              deleted:
 *                type: boolean
 *                description: Whether or not the items were deleted.
 *                default: true
 */
export default async (req, res) => {
  const { id, product_id } = req.params

  const priceListService: PriceListService =
    req.scope.resolve("priceListService")

  const manager: EntityManager = req.scope.resolve("manager")
  const [deletedPriceIds] = await manager.transaction(
    async (transactionManager) => {
      return await priceListService
        .withTransaction(transactionManager)
        .deleteProductPrices(id, [product_id])
    }
  )

  return res.json({
    ids: deletedPriceIds,
    object: "money-amount",
    deleted: true,
  })
}
