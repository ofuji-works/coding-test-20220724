import { Response } from "./types"

export type PrefecturesResponse = Response<
  {
    prefCode: number
    prefName: string
  }[]
>

export type PopulationsResponse = Response<{
  boundaryYear: number
  data: {
    label: string
    data: {
      year: number
      value: number
    }[]
  }[]
}>
