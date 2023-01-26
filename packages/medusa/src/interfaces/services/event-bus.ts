import { ulid } from "ulid"
import { StagedJob } from "../../models"

export type Subscriber<T = unknown> = (
  data: T,
  eventName: string
) => Promise<void>

export type SubscriberContext = {
  subscriberId: string
}

export type SubscriberDescriptor = {
  id: string
  subscriber: Subscriber
}

export type EventHandler<T = unknown> = (
  data: T,
  eventName: string
) => Promise<void>

export interface IEventBusModuleService {
  emit<T>(
    eventName: string,
    data: T,
    options?: unknown
  ): Promise<StagedJob | void>
}

export abstract class AbstractEventBusModuleService
  implements IEventBusModuleService
{
  public eventToSubscribersMap_: Map<string | symbol, SubscriberDescriptor[]> =
    new Map()

  abstract emit<T>(eventName: string, data: T, options?: unknown): Promise<void>

  public subscribe(
    event: string | symbol,
    subscriber: Subscriber,
    context?: SubscriberContext
  ): this {
    /**
     * If context is provided, we use the subscriberId from it
     * otherwise we generate a random using a ulid
     */
    const subscriberId =
      context?.subscriberId ?? `${event.toString()}-${ulid()}`

    const newSubscriberDescriptor = { subscriber, id: subscriberId }

    const existingSubscribers = this.eventToSubscribersMap_.get(event) ?? []

    const subscriberAlreadyExists = existingSubscribers.find(
      (sub) => sub.id === subscriberId
    )

    if (subscriberAlreadyExists) {
      throw Error(`Subscriber with id ${subscriberId} already exists`)
    }

    this.eventToSubscribersMap_.set(event, [
      ...existingSubscribers,
      newSubscriberDescriptor,
    ])

    return this
  }

  unsubscribe(
    event: string | symbol,
    subscriber: Subscriber,
    context: SubscriberContext
  ): this {
    const existingSubscribers = this.eventToSubscribersMap_.get(event)

    if (existingSubscribers?.length) {
      const subIndex = existingSubscribers?.findIndex(
        (sub) => sub.id === context?.subscriberId
      )

      if (subIndex !== -1) {
        this.eventToSubscribersMap_.get(event)?.splice(subIndex as number, 1)
      }
    }

    return this
  }
}
