/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { PostReturnReasonsReasonBodyMetadata } from "./postReturnReasonsReasonBodyMetadata"

export type PostReturnReasonsReasonBody = {
  /** The label to display to the Customer. */
  label?: string
  /** An optional description to for the Reason. */
  description?: string
  /** An optional set of key-value pairs with additional information. */
  metadata?: PostReturnReasonsReasonBodyMetadata
}
