import CustomerService from "../../../../services/customer"
/**
 * @oas [get] /auth
 * operationId: "GetAuth"
 * summary: "Get Session"
 * description: "Gets the currently logged in Customer."
 * x-authenticated: true
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged
 *       medusa.auth.getSession()
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'https://medusa-url.com/store/auth' \
 *       --header 'Cookie: connect.sid={sid}'
 * tags:
 *   - Auth
 * responses:
 *  "401":
 *    description: Unauthorized
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          properties:
 *            customer:
 *              $ref: "#/components/schemas/customer"
 */
export default async (req, res) => {
  if (req.user && req.user.customer_id) {
    const customerService: CustomerService =
      req.scope.resolve("customerService")

    const customer = await customerService.retrieve(req.user.customer_id, {
      relations: ["shipping_addresses", "orders", "orders.items"],
    })

    res.json({ customer })
  } else {
    res.sendStatus(401)
  }
}
