import { MockManager } from "medusa-test-utils"
import { RedisCacheService } from "../index"

jest.genMockFromModule("ioredis")
jest.mock("ioredis")

const loggerMock = {
  info: jest.fn().mockReturnValue(console.log),
  warn: jest.fn().mockReturnValue(console.log),
  error: jest.fn().mockReturnValue(console.log),
}

describe("RedisCacheService", () => {
  let eventBus

  describe("constructor", () => {
    beforeAll(() => {
      jest.resetAllMocks()
    })

    it("Creates a RedisCacheService", () => {
      eventBus = new RedisCacheService(
        {
          manager: MockManager,
          logger: loggerMock,
        },
        {
          redisUrl: "test-url",
        },
        {
          resources: "shared",
        }
      )
    })

    it("Throws on isolated module declaration", () => {
      try {
        eventBus = new RedisCacheService(
          {
            manager: MockManager,
            logger: loggerMock,
          },
          {
            redisUrl: "test-url",
          },
          {
            resources: "isolated",
          }
        )
      } catch (error) {
        expect(error.message).toEqual(
          "At the moment this module can only be used with shared resources"
        )
      }
    })
  })
})
