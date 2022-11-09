import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator"
import { RefundReason } from "../../../../models"

import { PaymentCollectionService } from "../../../../services"

export default async (req, res) => {
  const { payment_id } = req.params

  const data = req.validatedBody as AdminPostPaymentCollectionRefundsReq

  const paymentCollectionService: PaymentCollectionService = req.scope.resolve(
    "paymentCollectionService"
  )

  const refund = await paymentCollectionService.refund(
    payment_id,
    data.amount,
    data.reason,
    data.note
  )

  res.status(200).json({ refund })
}

export class AdminPostPaymentCollectionRefundsReq {
  @IsInt()
  @IsNotEmpty()
  amount: number

  @IsEnum(RefundReason)
  @IsNotEmpty()
  reason: RefundReason

  @IsString()
  @IsOptional()
  note?: string
}
