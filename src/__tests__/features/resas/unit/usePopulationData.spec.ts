import { renderHook, act } from "@testing-library/react-hooks"
import { usePopulationData } from "features/resas"

import { population } from "../../../mocks"

describe("usePopulationData test", () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require("../../../msw")
  beforeAll(() => worker.listen())
  afterEach(() => worker.resetHandlers())
  afterAll(() => worker.close())

  it("都道府県データ追加関数を実行すると、指定したデータが格納される", async () => {
    const { result, waitForValueToChange } = renderHook(() =>
      usePopulationData(),
    )
    act(() => {
      result.current.addPopulationData(1, "北海道")
    })
    await waitForValueToChange(() => result.current.populationData)
    console.log(result.current.populationData)
    expect(result.current.populationData[0].name).toBe("北海道")
    population.data[0].data.forEach((d, index) => {
      expect(result.current.populationData[0].data[index].value).toBe(d.value)
      expect(result.current.populationData[0].data[index].year).toBe(d.year)
    })
  })

  it("都道府県データ削除関数を実行すると、指定したデータが削除される", async () => {
    const { result, waitForValueToChange } = renderHook(() =>
      usePopulationData(),
    )
    act(() => {
      result.current.addPopulationData(1, "北海道")
    })
    console.log(result.current.populationData)
    await waitForValueToChange(() => result.current.populationData)
    expect(result.current.populationData[0].name).toBe("北海道")

    act(() => {
      result.current.removePopulationData("北海道")
    })
    console.log(result.current.populationData)
    expect(result.current.populationData.length).toBe(0)
  })
})
