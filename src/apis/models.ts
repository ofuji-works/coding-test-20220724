import { Response } from "./types"

export type PrefecturesResponse = Response<
  {
    prefCode: number
    prefName: string
  }[]
>
