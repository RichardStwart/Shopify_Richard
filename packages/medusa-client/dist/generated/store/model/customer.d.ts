/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { Address } from "./address";
import type { CustomerMetadata } from "./customerMetadata";
/**
 * Represents a customer
 */
export interface Customer {
    id?: string;
    email?: string;
    billing_address_id?: string;
    /** The Customer's billing address. */
    billing_address?: Address;
    shipping_addresses?: Address[];
    first_name?: string;
    last_name?: string;
    phone?: string;
    has_account?: boolean;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    metadata?: CustomerMetadata;
}
