import { rest } from "msw"

import { prefecturesApiResponse } from "../mocks"

export const handlers = [
  rest.get("/", (_, res, ctx) => {
    res(ctx.status(200), ctx.json(prefecturesApiResponse))
  }),
]
