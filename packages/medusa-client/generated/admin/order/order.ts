/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type {
  PostOrdersOrderShippingMethods200,
  PostOrdersOrderShippingMethodsBody,
  PostOrdersOrderArchive200,
  PostOrdersOrderCancel200,
  PostOrdersOrderCapture200,
  PostOrdersOrderComplete200,
  PostOrdersOrderClaimsClaimShipments200,
  PostOrdersOrderClaimsClaimShipmentsBody,
  PostOrdersOrderClaims200,
  PostOrdersOrderClaimsBody,
  PostOrdersOrderFulfillments200,
  PostOrdersOrderFulfillmentsBody,
  PostOrders200,
  PostOrdersBody,
  GetOrders200,
  GetOrdersParams,
  PostOrdersOrderShipment200,
  PostOrdersOrderShipmentBody,
  PostOrdersOrderSwapsSwapShipments200,
  PostOrdersOrderSwapsSwapShipmentsBody,
  PostOrdersOrderSwaps200,
  PostOrdersOrderSwapsBody,
  DeleteOrdersOrderMetadataKey200,
  PostOrdersOrderClaimsClaimFulfillments200,
  PostOrdersOrderClaimsClaimFulfillmentsBody,
  PostOrdersOrderSwapsSwapFulfillments200,
  PostOrdersOrderSwapsSwapFulfillmentsBody,
  GetOrdersOrder200,
  PostOrdersOrder200,
  PostOrdersOrderBody,
  PostOrdersOrderSwapsSwapProcessPayment200,
  PostOrdersOrderRefunds200,
  PostOrdersOrderRefundsBody,
  PostOrdersOrderReturns200,
  PostOrdersOrderReturnsBody,
  PostOrdersOrderClaimsClaim200,
  PostOrdersOrderClaimsClaimBody,
  GetTaxRates200,
  GetTaxRatesParams,
} from ".././model"
import { getClient } from "../../../src/custom-instance"

/**
 * Adds a Shipping Method to an Order. If another Shipping Method exists with the same Shipping Profile, the previous Shipping Method will be replaced.
 * @summary Add a Shipping Method
 */
export const postOrdersOrderShippingMethods = (
  id: string,
  postOrdersOrderShippingMethodsBody: PostOrdersOrderShippingMethodsBody
) => {
  return getClient<PostOrdersOrderShippingMethods200>({
    url: `/admin/orders/${id}/shipping-methods`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postOrdersOrderShippingMethodsBody,
  })
}
/**
 * Archives the order with the given id.
 * @summary Archive order
 */
export const postOrdersOrderArchive = (id: string) => {
  return getClient<PostOrdersOrderArchive200>({
    url: `/admin/orders/${id}/archive`,
    method: "post",
  })
}
/**
 * Registers an Order as canceled. This triggers a flow that will cancel any created Fulfillments and Payments, may fail if the Payment or Fulfillment Provider is unable to cancel the Payment/Fulfillment.
 * @summary Cancel an Order
 */
export const postOrdersOrderCancel = (id: string) => {
  return getClient<PostOrdersOrderCancel200>({
    url: `/admin/orders/${id}/cancel`,
    method: "post",
  })
}
/**
 * Captures all the Payments associated with an Order.
 * @summary Capture an Order
 */
export const postOrdersOrderCapture = (id: string) => {
  return getClient<PostOrdersOrderCapture200>({
    url: `/admin/orders/${id}/capture`,
    method: "post",
  })
}
/**
 * Completes an Order
 * @summary Complete an Order
 */
export const postOrdersOrderComplete = (id: string) => {
  return getClient<PostOrdersOrderComplete200>({
    url: `/admin/orders/${id}/complete`,
    method: "post",
  })
}
/**
 * Registers a Claim Fulfillment as shipped.
 * @summary Create Claim Shipment
 */
export const postOrdersOrderClaimsClaimShipments = (
  id: string,
  claimId: string,
  postOrdersOrderClaimsClaimShipmentsBody: PostOrdersOrderClaimsClaimShipmentsBody
) => {
  return getClient<PostOrdersOrderClaimsClaimShipments200>({
    url: `/admin/orders/${id}/claims/${claimId}/shipments`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postOrdersOrderClaimsClaimShipmentsBody,
  })
}
/**
 * Creates a Claim.
 * @summary Create a Claim
 */
export const postOrdersOrderClaims = (
  id: string,
  postOrdersOrderClaimsBody: PostOrdersOrderClaimsBody
) => {
  return getClient<PostOrdersOrderClaims200>({
    url: `/admin/order/${id}/claims`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postOrdersOrderClaimsBody,
  })
}
/**
 * Creates a Fulfillment of an Order - will notify Fulfillment Providers to prepare a shipment.
 * @summary Create a Fulfillment
 */
export const postOrdersOrderFulfillments = (
  id: string,
  postOrdersOrderFulfillmentsBody: PostOrdersOrderFulfillmentsBody
) => {
  return getClient<PostOrdersOrderFulfillments200>({
    url: `/admin/orders/${id}/fulfillments`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postOrdersOrderFulfillmentsBody,
  })
}
/**
 * Creates and order
 * @summary Create an order
 */
export const postOrders = (postOrdersBody: PostOrdersBody) => {
  return getClient<PostOrders200>({
    url: `/admin/orders`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postOrdersBody,
  })
}
/**
 * Retrieves a list of Orders
 * @summary List Orders
 */
export const getOrders = (params?: GetOrdersParams) => {
  return getClient<GetOrders200>({
    url: `/admin/orders`,
    method: "get",
    params,
  })
}
/**
 * Registers a Fulfillment as shipped.
 * @summary Create a Shipment
 */
export const postOrdersOrderShipment = (
  id: string,
  postOrdersOrderShipmentBody: PostOrdersOrderShipmentBody
) => {
  return getClient<PostOrdersOrderShipment200>({
    url: `/admin/orders/${id}/shipment`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postOrdersOrderShipmentBody,
  })
}
/**
 * Registers a Swap Fulfillment as shipped.
 * @summary Create Swap Shipment
 */
export const postOrdersOrderSwapsSwapShipments = (
  id: string,
  swapId: string,
  postOrdersOrderSwapsSwapShipmentsBody: PostOrdersOrderSwapsSwapShipmentsBody
) => {
  return getClient<PostOrdersOrderSwapsSwapShipments200>({
    url: `/admin/orders/${id}/swaps/${swapId}/shipments`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postOrdersOrderSwapsSwapShipmentsBody,
  })
}
/**
 * Creates a Swap. Swaps are used to handle Return of previously purchased goods and Fulfillment of replacements simultaneously.
 * @summary Create a Swap
 */
export const postOrdersOrderSwaps = (
  id: string,
  postOrdersOrderSwapsBody: PostOrdersOrderSwapsBody
) => {
  return getClient<PostOrdersOrderSwaps200>({
    url: `/admin/order/${id}/swaps`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postOrdersOrderSwapsBody,
  })
}
/**
 * Deletes a metadata key.
 * @summary Delete Metadata
 */
export const deleteOrdersOrderMetadataKey = (id: string, key: string) => {
  return getClient<DeleteOrdersOrderMetadataKey200>({
    url: `/admin/order/${id}/metadata/${key}`,
    method: "delete",
  })
}
/**
 * Creates a Fulfillment for a Claim.
 * @summary Create a Claim Fulfillment
 */
export const postOrdersOrderClaimsClaimFulfillments = (
  id: string,
  claimId: string,
  postOrdersOrderClaimsClaimFulfillmentsBody: PostOrdersOrderClaimsClaimFulfillmentsBody
) => {
  return getClient<PostOrdersOrderClaimsClaimFulfillments200>({
    url: `/admin/orders/${id}/claims/${claimId}/fulfillments`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postOrdersOrderClaimsClaimFulfillmentsBody,
  })
}
/**
 * Creates a Fulfillment for a Swap.
 * @summary Create a Swap Fulfillment
 */
export const postOrdersOrderSwapsSwapFulfillments = (
  id: string,
  swapId: string,
  postOrdersOrderSwapsSwapFulfillmentsBody: PostOrdersOrderSwapsSwapFulfillmentsBody
) => {
  return getClient<PostOrdersOrderSwapsSwapFulfillments200>({
    url: `/admin/orders/${id}/swaps/${swapId}/fulfillments`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postOrdersOrderSwapsSwapFulfillmentsBody,
  })
}
/**
 * Retrieves an Order
 * @summary Retrieve an Order
 */
export const getOrdersOrder = (id: string) => {
  return getClient<GetOrdersOrder200>({
    url: `/admin/orders/${id}`,
    method: "get",
  })
}
/**
 * Updates and order
 * @summary Update an order
 */
export const postOrdersOrder = (
  id: string,
  postOrdersOrderBody: PostOrdersOrderBody
) => {
  return getClient<PostOrdersOrder200>({
    url: `/admin/orders/${id}`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postOrdersOrderBody,
  })
}
/**
 * When there are differences between the returned and shipped Products in a Swap, the difference must be processed. Either a Refund will be issued or a Payment will be captured.
 * @summary Process a Swap difference
 */
export const postOrdersOrderSwapsSwapProcessPayment = (
  id: string,
  swapId: string
) => {
  return getClient<PostOrdersOrderSwapsSwapProcessPayment200>({
    url: `/admin/orders/${id}/swaps/${swapId}/process-payment`,
    method: "post",
  })
}
/**
 * Issues a Refund.
 * @summary Create a Refund
 */
export const postOrdersOrderRefunds = (
  id: string,
  postOrdersOrderRefundsBody: PostOrdersOrderRefundsBody
) => {
  return getClient<PostOrdersOrderRefunds200>({
    url: `/admin/orders/${id}/refunds`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postOrdersOrderRefundsBody,
  })
}
/**
 * Requests a Return. If applicable a return label will be created and other plugins notified.
 * @summary Request a Return
 */
export const postOrdersOrderReturns = (
  id: string,
  postOrdersOrderReturnsBody: PostOrdersOrderReturnsBody
) => {
  return getClient<PostOrdersOrderReturns200>({
    url: `/admin/orders/${id}/returns`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postOrdersOrderReturnsBody,
  })
}
/**
 * Updates a Claim.
 * @summary Update a Claim
 */
export const postOrdersOrderClaimsClaim = (
  id: string,
  claimId: string,
  postOrdersOrderClaimsClaimBody: PostOrdersOrderClaimsClaimBody
) => {
  return getClient<PostOrdersOrderClaimsClaim200>({
    url: `/admin/order/${id}/claims/${claimId}`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postOrdersOrderClaimsClaimBody,
  })
}
/**
 * Retrieves a list of TaxRates
 * @summary List Tax Rates
 */
export const getTaxRates = (params?: GetTaxRatesParams) => {
  return getClient<GetTaxRates200>({
    url: `/admin/tax-rates`,
    method: "get",
    params,
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any

export type PostOrdersOrderShippingMethodsResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderShippingMethods>
>
export type PostOrdersOrderArchiveResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderArchive>
>
export type PostOrdersOrderCancelResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderCancel>
>
export type PostOrdersOrderCaptureResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderCapture>
>
export type PostOrdersOrderCompleteResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderComplete>
>
export type PostOrdersOrderClaimsClaimShipmentsResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderClaimsClaimShipments>
>
export type PostOrdersOrderClaimsResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderClaims>
>
export type PostOrdersOrderFulfillmentsResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderFulfillments>
>
export type PostOrdersResult = NonNullable<AsyncReturnType<typeof postOrders>>
export type GetOrdersResult = NonNullable<AsyncReturnType<typeof getOrders>>
export type PostOrdersOrderShipmentResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderShipment>
>
export type PostOrdersOrderSwapsSwapShipmentsResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderSwapsSwapShipments>
>
export type PostOrdersOrderSwapsResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderSwaps>
>
export type DeleteOrdersOrderMetadataKeyResult = NonNullable<
  AsyncReturnType<typeof deleteOrdersOrderMetadataKey>
>
export type PostOrdersOrderClaimsClaimFulfillmentsResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderClaimsClaimFulfillments>
>
export type PostOrdersOrderSwapsSwapFulfillmentsResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderSwapsSwapFulfillments>
>
export type GetOrdersOrderResult = NonNullable<
  AsyncReturnType<typeof getOrdersOrder>
>
export type PostOrdersOrderResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrder>
>
export type PostOrdersOrderSwapsSwapProcessPaymentResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderSwapsSwapProcessPayment>
>
export type PostOrdersOrderRefundsResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderRefunds>
>
export type PostOrdersOrderReturnsResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderReturns>
>
export type PostOrdersOrderClaimsClaimResult = NonNullable<
  AsyncReturnType<typeof postOrdersOrderClaimsClaim>
>
export type GetTaxRatesResult = NonNullable<AsyncReturnType<typeof getTaxRates>>
