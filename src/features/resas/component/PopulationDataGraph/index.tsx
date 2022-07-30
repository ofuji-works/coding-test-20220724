import { FC } from "react"

import { LineChart } from "components"

import { PopulationData } from "../../types"
import "./style.scss"

type Props = {
  data: PopulationData[]
}

export const PopulationDataGraph: FC<Props> = ({ data }) => {
  return (
    <div className="graph-area">
      <LineChart
        data={data}
        width={1200}
        height={600}
        xDataKey="year"
        xLabel="年度"
        yDataKey="value"
        yLabel="人口数（千）"
        yTickFormatter={(value) => {
          if (value === 0) {
            return ""
          }
          return `${value / 1000}`
        }}
      />
    </div>
  )
}
