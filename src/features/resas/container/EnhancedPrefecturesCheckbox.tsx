import { FC } from "react"

import { PrefecturesCheckbox } from "../component"
import { usePrefectures } from "../hook"

export const EnhancedPrefecturesCheckbox: FC = () => {
  const { prefectures } = usePrefectures()
  return <PrefecturesCheckbox prefectures={prefectures} />
}
