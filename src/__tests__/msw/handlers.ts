import { API_URL } from "config"
import { rest } from "msw"

import { populationApiResponse, prefecturesApiResponse } from "../mocks"

export const handlers = [
  rest.get(`${API_URL}/api/v1/prefectures`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(prefecturesApiResponse))
  }),

  rest.get(
    `${API_URL}/api/v1/population/composition/perYear`,
    (req, res, ctx) => {
      console.log("query prefCode", req.url.searchParams.get("prefCode"))
      return res(ctx.status(200), ctx.json(populationApiResponse))
    },
  ),
]
