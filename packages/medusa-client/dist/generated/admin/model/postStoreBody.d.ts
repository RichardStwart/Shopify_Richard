/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
export declare type PostStoreBody = {
    /** The name of the Store */
    name?: string;
    /** A template for Swap links - use `{{cart_id}}` to insert the Swap Cart id */
    swap_link_template?: string;
    /** A template for payment links links - use `{{cart_id}}` to insert the Cart id */
    payment_link_template?: string;
    /** A template for invite links - use `{{invite_token}}` to insert the invite token */
    invite_link_template?: string;
    /** The default currency code for the Store. */
    default_currency_code?: string;
};
