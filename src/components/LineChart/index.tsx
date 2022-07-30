import { FC } from "react"

import {
  CartesianGrid,
  Label,
  LineChart as RCLinChart,
  Line as RCLine,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts"

type Data = {
  name: string
  data: { [key: string]: number }[]
}

export type LineChartProps = {
  data: Data[]
  width: number
  height: number
  xDataKey: string
  xLabel: string
  yDataKey: string
  yLabel: string
  ytick?: number[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  yTickFormatter?: (value: any, index: number) => string
}

export const LineChart: FC<LineChartProps> = (props) => {
  const {
    data,
    xDataKey,
    xLabel,
    yDataKey,
    yLabel,
    width,
    height,
    ytick,
    yTickFormatter,
  } = props
  return (
    <ResponsiveContainer width="100%" height={600}>
      <RCLinChart
        width={width}
        height={height}
        margin={{ top: 32, left: 16, bottom: 16, right: 16 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={xDataKey}
          type="category"
          allowDuplicatedCategory={false}
          padding={{ right: 32 }}
        >
          <Label value={xLabel} offset={0} position="right" />
        </XAxis>
        <YAxis
          dataKey={yDataKey}
          ticks={ytick}
          tickFormatter={yTickFormatter}
          padding={{ top: 16 }}
        >
          <Label value={yLabel} offset={0} position="top" />
        </YAxis>
        <Legend />
        {data.map((d) => (
          <RCLine
            dataKey={yDataKey}
            data={d.data}
            name={d.name}
            key={d.name}
            stroke={"#" + Math.floor(Math.random() * 16777215).toString(16)}
          />
        ))}
      </RCLinChart>
    </ResponsiveContainer>
  )
}
