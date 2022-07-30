import { renderHook } from "@testing-library/react-hooks"
import { usePrefectures } from "features/resas"

import { prefectures } from "../../../mocks"

describe("usePrefectures test", () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require("../../../msw")
  beforeAll(() => worker.listen())
  afterEach(() => worker.resetHandlers())
  afterAll(() => worker.close())

  it("都道府県データの取得", async () => {
    const { result, waitForValueToChange } = renderHook(() => usePrefectures())
    await waitForValueToChange(() => result.current.prefectures)
    console.log(result.current.prefectures)
    prefectures.forEach((prefecture, index) => {
      expect(prefecture.prefName).toBe(
        result.current.prefectures[index].prefName,
      )
    })
  })
})
