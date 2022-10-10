import { StripeBase } from "."

class IdealProviderService extends StripeBase {
  static identifier = "stripe-ideal"

  constructor(
    {
      stripeProviderService,
      customerService,
      totalsService,
      regionService,
      manager,
    },
    options
  ) {
    super(
      {
        stripeProviderService,
        customerService,
        totalsService,
        regionService,
        manager,
      },
      options,
      ["ideal"]
    )
  }
}

export default IdealProviderService
