/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { PostShippingOptions200, PostShippingOptionsBody, GetShippingOptions200, GetShippingOptionsParams, DeleteShippingOptionsOption200, GetShippingOptionsOption200, PostShippingOptionsOption200, PostShippingOptionsOptionBody } from ".././model";
/**
 * Creates a Shipping Option
 * @summary Create Shipping Option
 */
export declare const postShippingOptions: (postShippingOptionsBody: PostShippingOptionsBody) => Promise<PostShippingOptions200>;
/**
 * Retrieves a list of Shipping Options.
 * @summary List Shipping Options
 */
export declare const getShippingOptions: (params?: GetShippingOptionsParams | undefined) => Promise<GetShippingOptions200>;
/**
 * Deletes a Shipping Option.
 * @summary Delete a Shipping Option
 */
export declare const deleteShippingOptionsOption: (id: string) => Promise<DeleteShippingOptionsOption200>;
/**
 * Retrieves a Shipping Option.
 * @summary Retrieve a Shipping Option
 */
export declare const getShippingOptionsOption: (id: string) => Promise<GetShippingOptionsOption200>;
/**
 * Updates a Shipping Option
 * @summary Update Shipping Option
 */
export declare const postShippingOptionsOption: (id: string, postShippingOptionsOptionBody: PostShippingOptionsOptionBody) => Promise<PostShippingOptionsOption200>;
declare type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any;
export declare type PostShippingOptionsResult = NonNullable<AsyncReturnType<typeof postShippingOptions>>;
export declare type GetShippingOptionsResult = NonNullable<AsyncReturnType<typeof getShippingOptions>>;
export declare type DeleteShippingOptionsOptionResult = NonNullable<AsyncReturnType<typeof deleteShippingOptionsOption>>;
export declare type GetShippingOptionsOptionResult = NonNullable<AsyncReturnType<typeof getShippingOptionsOption>>;
export declare type PostShippingOptionsOptionResult = NonNullable<AsyncReturnType<typeof postShippingOptionsOption>>;
export {};
