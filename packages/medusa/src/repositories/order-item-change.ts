import { OrderItemChange } from "../models"
import { dataSource } from "../loaders/database"

export const OrderItemChangeRepository =
  dataSource.getRepository(OrderItemChange)
