import { IdMap } from "medusa-test-utils"
import { request } from "../../../../../helpers/test-request"
import { ShippingProfileServiceMock } from "../../../../../services/__mocks__/shipping-profile"

describe("POST /admin/shipping-profiles/:profile_id/products", () => {
  describe("successful addition", () => {
    let subject

    beforeAll(async () => {
      const profileId = IdMap.getId("validId")
      subject = await request(
        "POST",
        `/admin/shipping-profiles/${profileId}/shipping-options`,
        {
          payload: {
            option_id: IdMap.getId("validId"),
          },
          adminSession: {
            jwt: {
              userId: IdMap.getId("admin_user"),
            },
          },
        }
      )
    })

    it("returns 200", () => {
      expect(subject.status).toEqual(200)
    })

    it("calls service retrieve", () => {
      expect(ShippingProfileServiceMock.retrieve).toHaveBeenCalledTimes(1)
      expect(ShippingProfileServiceMock.retrieve).toHaveBeenCalledWith(
        IdMap.getId("validId")
      )
      expect(
        ShippingProfileServiceMock.addShippingOption
      ).toHaveBeenCalledTimes(1)
      expect(ShippingProfileServiceMock.addShippingOption).toHaveBeenCalledWith(
        IdMap.getId("validId"),
        IdMap.getId("validId")
      )
    })
  })
})
