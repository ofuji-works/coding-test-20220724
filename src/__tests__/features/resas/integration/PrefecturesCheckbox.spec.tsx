import { render, screen, fireEvent } from "@testing-library/react"
import { PrefecturesCheckbox } from "features/resas"

import { prefectures } from "../../../mocks"

describe("PrefecturesCheckbox test", () => {
  const checkedHandlerMock = jest.fn()
  const unCheckedHandlerMock = jest.fn()
  it("都道府県データがある場合、チェックボックスが表示されている", () => {
    render(
      <PrefecturesCheckbox
        prefectures={prefectures}
        onChecked={checkedHandlerMock}
        onUnChecked={unCheckedHandlerMock}
      />,
    )
    expect(screen.getByText(prefectures[0].prefName)).toBeInTheDocument()
  })

  it("都道府県データがない場合、チェックボックスが表示されていない", () => {
    render(
      <PrefecturesCheckbox
        prefectures={[]}
        onChecked={checkedHandlerMock}
        onUnChecked={unCheckedHandlerMock}
      />,
    )
    expect(screen.queryByText(prefectures[0].prefName)).toBeNull()
  })

  it("初期のチェックボックスをクリックした場合、checkedになりonChecked関数が実行される", () => {
    render(
      <PrefecturesCheckbox
        prefectures={prefectures}
        onChecked={checkedHandlerMock}
        onUnChecked={unCheckedHandlerMock}
      />,
    )
    const checkbox = screen.getByLabelText(prefectures[0].prefName)
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(checkedHandlerMock).toBeCalled()
  })

  it("チェックされたチェックボックスをクリックした場合、checkedが外れonUnChecked関数が実行される", () => {
    render(
      <PrefecturesCheckbox
        prefectures={prefectures}
        onChecked={checkedHandlerMock}
        onUnChecked={unCheckedHandlerMock}
      />,
    )
    const checkbox = screen.getByLabelText(prefectures[0].prefName)
    fireEvent.click(checkbox)
    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
    expect(unCheckedHandlerMock).toBeCalled()
  })
})
