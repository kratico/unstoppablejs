import { call, str, uint, bool, vector } from "../"
import { testCodec } from "./test-utils"

const tester = testCodec(call(str, bool, vector(uint(8))))

describe("call", () => {
  it("works", () => {
    const location1 =
      "0000000000000000000000000000000000000000000000000000000000000060"
    const boolTrue =
      "0000000000000000000000000000000000000000000000000000000000000001"
    const location2 =
      "00000000000000000000000000000000000000000000000000000000000000a0"
    const strlen =
      "0000000000000000000000000000000000000000000000000000000000000004"
    const strdata =
      "6461766500000000000000000000000000000000000000000000000000000000"
    const arrlen =
      "0000000000000000000000000000000000000000000000000000000000000003"
    const arr1 =
      "0000000000000000000000000000000000000000000000000000000000000001"
    const arr2 =
      "0000000000000000000000000000000000000000000000000000000000000002"
    const arr3 =
      "0000000000000000000000000000000000000000000000000000000000000003"

    tester(
      ["dave", true, [1n, 2n, 3n]],
      `0x${location1}${boolTrue}${location2}${strlen}${strdata}${arrlen}${arr1}${arr2}${arr3}`,
    )
  })
})
