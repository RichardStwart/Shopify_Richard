import { EntityManager } from "typeorm"
import { IsString } from "class-validator"
import NoteService from "../../../../services/note"
import { validator } from "../../../../utils/validator"

/**
 * @oas [post] /notes/{id}
 * operationId: "PostNotesNote"
 * summary: "Updates a Note"
 * x-authenticated: true
 * description: "Updates a Note associated with some resource"
 * parameters:
 *   - (path) id=* {string} The ID of the Note to update
 * requestBody:
 *  content:
 *    application/json:
 *      schema:
 *        required:
 *          - value
 *        properties:
 *          value:
 *            type: string
 *            description: The updated description of the Note.
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.notes.update(note_id, {
 *        value: 'We delivered this order'
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/notes/{id}' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "value": "We delivered this order"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Note
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             note:
 *               $ref: "#/components/schemas/note"
 *
 */
export default async (req, res) => {
  const { id } = req.params

  const validated = await validator(AdminPostNotesNoteReq, req.body)

  const noteService: NoteService = req.scope.resolve("noteService")
  const manager: EntityManager = req.scope.resolve("manager")
  const note = await manager.transaction(async (transactionManager) => {
    return await noteService
      .withTransaction(transactionManager)
      .update(id, validated.value)
  })

  res.status(200).json({ note })
}

export class AdminPostNotesNoteReq {
  @IsString()
  value: string
}
