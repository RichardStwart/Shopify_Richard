import NoteService from "../../../../services/note"

/**
 * @oas [get] /notes/{id}
 * operationId: "GetNotesNote"
 * summary: "Get Note"
 * description: "Retrieves a single note using its id"
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the note to retrieve.
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.notes.retrieve(note_id)
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'https://medusa-url.com/admin/notes/{id}' \
 *       --header 'Authorization: Bearer {api_token}'
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
 */
export default async (req, res) => {
  const { id } = req.params

  const noteService: NoteService = req.scope.resolve("noteService")
  const note = await noteService.retrieve(id, { relations: ["author"] })

  res.status(200).json({ note })
}
