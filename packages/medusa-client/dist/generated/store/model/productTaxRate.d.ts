/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { ProductTaxRateMetadata } from "./productTaxRateMetadata";
/**
 * Associates a tax rate with a product to indicate that the product is taxed in a certain way
 */
export interface ProductTaxRate {
    /** The id of the Product */
    product_id?: string;
    /** The id of the Tax Rate */
    rate_id?: string;
    /** The date with timezone at which the resource was created. */
    created_at?: string;
    /** The date with timezone at which the resource was last updated. */
    updated_at?: string;
    /** The date with timezone at which the resource was deleted. */
    deleted_at?: string;
    /** An optional key-value map with additional information. */
    metadata?: ProductTaxRateMetadata;
}
