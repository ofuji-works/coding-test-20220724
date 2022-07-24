import { client } from "./base"

export const getPrefectures = () => client.get("/api/v1/prefectures")

export const getPopulations = () =>
  client.get("/api/v1/population/composition/perYear")
