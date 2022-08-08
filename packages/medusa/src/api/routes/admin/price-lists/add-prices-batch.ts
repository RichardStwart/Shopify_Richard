import { IsArray, IsBoolean, IsOptional, ValidateNested } from "class-validator"
import { defaultAdminPriceListFields, defaultAdminPriceListRelations } from "."

import { AdminPriceListPricesUpdateReq } from "../../../../types/price-list"
import { EntityManager } from "typeorm"
import { PriceList } from "../../../.."
import PriceListService from "../../../../services/price-list"
import { Type } from "class-transformer"
import { validator } from "../../../../utils/validator"

/**
 * @oas [post] /price-lists/{id}/prices/batch
 * operationId: "PostPriceListsPriceListPricesBatch"
 * summary: "Batch update prices for a Price List"
 * description: "Batch update prices for a Price List"
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Price List to update prices for.
 * requestBody:
 *  content:
 *    application/json:
 *      schema:
 *        properties:
 *          prices:
 *            description: The prices to update or add.
 *            type: array
 *            items:
 *              required:
 *                - amount
 *                - variant_id
 *              properties:
 *                id:
 *                  description: The ID of the price.
 *                  type: string
 *                region_id:
 *                  description: The ID of the Region for which the price is used. Only required if currecny_code is not provided.
 *                  type: string
 *                currency_code:
 *                  description: The 3 character ISO currency code for which the price will be used. Only required if region_id is not provided.
 *                  type: string
 *                  externalDocs:
 *                    url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *                    description: See a list of codes.
 *                variant_id:
 *                  description: The ID of the Variant for which the price is used.
 *                  type: string
 *                amount:
 *                  description: The amount to charge for the Product Variant.
 *                  type: integer
 *                min_quantity:
 *                  description: The minimum quantity for which the price will be used.
 *                  type: integer
 *                max_quantity:
 *                  description: The maximum quantity for which the price will be used.
 *                  type: integer
 *          override:
 *            description: "If true the prices will replace all existing prices associated with the Price List."
 *            type: boolean
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.priceLists.addPrices(price_list_id, {
 *         prices: [
 *           {
 *             amount: 1000,
 *             variant_id,
 *             currency_code: 'eur'
 *           }
 *         ]
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'localhost:9000/admin/price-lists/{id}/prices/batch' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "prices": [
 *             {
 *               "amount": 100,
 *               "variant_id": "afasfa",
 *               "currency_code": "eur"
 *             }
 *           ]
 *       }'
 * tags:
 *   - Price List
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             price_list:
 *               $ref: "#/components/schemas/price_list"
 */
export default async (req, res) => {
  const { id } = req.params

  const validated = await validator(AdminPostPriceListPricesPricesReq, req.body)

  const priceListService: PriceListService =
    req.scope.resolve("priceListService")

  const manager: EntityManager = req.scope.resolve("manager")
  await manager.transaction(async (transactionManager) => {
    return await priceListService
      .withTransaction(transactionManager)
      .addPrices(id, validated.prices, validated.override)
  })

  const priceList = await priceListService.retrieve(id, {
    select: defaultAdminPriceListFields as (keyof PriceList)[],
    relations: defaultAdminPriceListRelations,
  })

  res.json({ price_list: priceList })
}

export class AdminPostPriceListPricesPricesReq {
  @IsArray()
  @Type(() => AdminPriceListPricesUpdateReq)
  @ValidateNested({ each: true })
  prices: AdminPriceListPricesUpdateReq[]

  @IsOptional()
  @IsBoolean()
  override?: boolean
}
