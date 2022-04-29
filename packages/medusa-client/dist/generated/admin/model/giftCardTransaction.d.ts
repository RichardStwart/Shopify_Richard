/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { GiftCard } from "./giftCard";
/**
 * Gift Card Transactions are created once a Customer uses a Gift Card to pay for their Order
 */
export interface GiftCardTransaction {
    /** The id of the Gift Card Transaction. This value will be prefixed by `gct_`. */
    id?: string;
    /** The id of the Gift Card that was used in the transaction. */
    gift_card_id?: string;
    /** The Gift Card that was used in the transaction. */
    gift_card?: GiftCard;
    /** The id of the Order that the Gift Card was used to pay for. */
    order_id?: string;
    /** The amount that was used from the Gift Card. */
    amount?: number;
    /** The date with timezone at which the resource was created. */
    created_at?: string;
}
