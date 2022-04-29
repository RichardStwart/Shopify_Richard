/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { Address } from "./address";
import type { LineItem } from "./lineItem";
import type { Region } from "./region";
import type { GiftCard } from "./giftCard";
import type { Customer } from "./customer";
import type { PaymentSession } from "./paymentSession";
import type { Payment } from "./payment";
import type { ShippingMethod } from "./shippingMethod";
import type { CartType } from "./cartType";
import type { CartMetadata } from "./cartMetadata";
/**
 * Represents a user cart
 */
export interface Cart {
    id?: string;
    email?: string;
    billing_address_id?: string;
    billing_address?: Address;
    shipping_address_id?: string;
    shipping_address?: Address;
    items?: LineItem[];
    region_id?: string;
    region?: Region;
    discounts?: Region[];
    gift_cards?: GiftCard[];
    customer_id?: string;
    customer?: Customer;
    payment_session?: PaymentSession;
    payment_sessions?: PaymentSession[];
    payment?: Payment;
    shipping_methods?: ShippingMethod[];
    type?: CartType;
    completed_at?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    metadata?: CartMetadata;
    shipping_total?: number;
    discount_total?: number;
    tax_total?: number;
    subtotal?: number;
    refundable_amount?: number;
    gift_card_total?: number;
}
