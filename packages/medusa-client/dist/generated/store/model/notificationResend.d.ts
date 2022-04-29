/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { NotificationResendData } from "./notificationResendData";
/**
 * A resend of a Notification.
 */
export interface NotificationResend {
    /** The id of the Notification. This value will be prefixed by `noti_`. */
    id?: string;
    /** The name of the event that the notification was sent for. */
    event_name?: string;
    /** The type of resource that the Notification refers to. */
    resource_type?: string;
    /** The id of the resource that the Notification refers to. */
    resource_id?: string;
    /** The address that the Notification was sent to. This will usually be an email address, but represent other addresses such as a chat bot user id */
    to?: string;
    /** The data that the Notification was sent with. This contains all the data necessary for the Notification Provider to initiate a resend. */
    data?: NotificationResendData;
    /** The id of the Notification that was originally sent. */
    parent_id?: string;
    /** The id of the Notification Provider that handles the Notification. */
    provider_id?: string;
    /** The date with timezone at which the resource was created. */
    created_at?: string;
    /** The date with timezone at which the resource was last updated. */
    updated_at?: string;
}
