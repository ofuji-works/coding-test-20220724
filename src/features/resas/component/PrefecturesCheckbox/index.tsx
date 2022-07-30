import { ChangeEventHandler, FC } from "react"

import { CheckBox } from "components"

import type { Prefecture } from "../../types"
import "./style.scss"

type Props = {
  prefectures: Prefecture[]
  onChecked: (code: number, name: string) => void
  onUnChecked: (name: string) => void
}

export const PrefecturesCheckbox: FC<Props> = ({
  prefectures,
  onChecked,
  onUnChecked,
}) => {
  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target
    if (e.target.checked) {
      onChecked(Number(value), name)
    } else {
      onUnChecked(name)
    }
  }
  return (
    <div>
      <h2>都道府県</h2>
      <div className="checkbox-area">
        {prefectures.map((prefecture) => {
          return (
            <CheckBox
              key={prefecture.prefName}
              onChange={onChangeHandler}
              name={prefecture.prefName}
              code={prefecture.prefCode}
            />
          )
        })}
      </div>
    </div>
  )
}
