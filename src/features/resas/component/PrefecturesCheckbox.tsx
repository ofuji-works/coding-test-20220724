import { FC } from "react"

import type { Prefecture } from "../types"

type Props = {
  prefectures: Prefecture[]
}

export const PrefecturesCheckbox: FC<Props> = ({ prefectures }) => {
  return (
    <div>
      <h2>都道府県</h2>
      <div>
        {prefectures.map((prefecture) => {
          return (
            <div key={`key-${prefecture.prefCode}`}>
              <input
                id={`prefcode-${prefecture.prefCode}`}
                type="checkbox"
                name="prefecture"
                value={prefecture.prefCode}
              />
              <label htmlFor={`prefcode-${prefecture.prefCode}`}>
                {prefecture.prefName}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
