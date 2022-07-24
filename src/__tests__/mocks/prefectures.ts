import type { ApiResponse } from "apis"
import type { Prefecture } from "features/resas"

export const prefectures: Prefecture[] = [
  {
    prefCode: 1,
    prefName: "北海道",
  },
  {
    prefCode: 2,
    prefName: "青森県",
  },
  {
    prefCode: 3,
    prefName: "岩手県",
  },
]

export const prefecturesApiResponse: ApiResponse<Prefecture[]> = {
  message: "",
  result: prefectures,
}
