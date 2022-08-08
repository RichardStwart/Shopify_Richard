import InviteService from "../../../../services/invite"

/**
 * @oas [get] /invites
 * operationId: "GetInvites"
 * summary: "Lists all Invites"
 * description: "Lists all Invites"
 * x-authenticated: true
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in
 *       medusa.admin.invites.list()
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'localhost:9000/admin/invites' \
 *       --header 'Authorization: Bearer {api_token}'
 * tags:
 *   - Invite
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             invites:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/invite"
 */
export default async (req, res) => {
  const inviteService: InviteService = req.scope.resolve("inviteService")
  const invites = await inviteService.list({})

  res.status(200).json({ invites })
}
