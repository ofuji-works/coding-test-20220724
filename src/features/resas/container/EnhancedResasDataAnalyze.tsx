import { FC } from "react"

import { PopulationDataGraph, PrefecturesCheckbox } from "../component"
import { usePopulationData, usePrefectures } from "../hook"

export const EnhancedResasDataAnalyze: FC = () => {
  const { prefectures } = usePrefectures()
  const { populationData, addPopulationData, removePopulationData } =
    usePopulationData()
  return (
    <section>
      <PrefecturesCheckbox
        prefectures={prefectures}
        onChecked={addPopulationData}
        onUnChecked={removePopulationData}
      />
      <PopulationDataGraph data={populationData} />
    </section>
  )
}
