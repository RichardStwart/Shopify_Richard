/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { TaxRateMetadata } from "./taxRateMetadata";
/**
 * A Tax Rate can be used to associate a certain rate to charge on products within a given Region
 */
export interface TaxRate {
    /** The id of the Tax Rate. This value will be prefixed by `txr_`. */
    id?: string;
    /** The numeric rate to charge */
    rate?: number;
    /** A code to identify the tax type by */
    code?: string;
    /** A human friendly name for the tax */
    name?: string;
    /** The id of the Region that the rate belongs to */
    region_id?: string;
    /** The date with timezone at which the resource was created. */
    created_at?: string;
    /** The date with timezone at which the resource was last updated. */
    updated_at?: string;
    /** An optional key-value map with additional information. */
    metadata?: TaxRateMetadata;
    /** The amount that can be refunded from the given Line Item. Takes taxes and discounts into consideration. */
    refundable?: number;
}
