import { IsString } from "class-validator"

/**
 * [delete] /uploads
 * operationId: "AdminDeleteUploads"
 * summary: "Removes an uploaded file"
 * description: "Removes an uploaded file using the installed fileservice"
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         required:
 *           - file_key
 *         properties:
 *           file_key:
 *             description: "key of the file to delete"
 *             type: string
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.uploads.delete({
 *         file_key
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request DELETE 'localhost:9000/admin/uploads' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "file_key": "{file_key}"
 *       }'
 * tags:
 *   - Upload
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             id:
 *               type: string
 *               description: The file key of the upload deleted
 *             object:
 *               type: string
 *               description: The type of the object that was deleted.
 *               default: file
 *             deleted:
 *               type: boolean
 *               description: Whether or not the items were deleted.
 *               default: true
 */
export default async (req, res) => {
  const validated = req.validatedBody as AdminDeleteUploadsReq

  const fileService = req.scope.resolve("fileService")

  await fileService.delete(validated)

  res
    .status(200)
    .send({ id: validated.file_key, object: "file", deleted: true })
}

export class AdminDeleteUploadsReq {
  @IsString()
  file_key: string
}
