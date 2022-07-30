export type Prefecture = {
  prefCode: number
  prefName: string
}

export type PopulationData = {
  name: string
  data: {
    year: number
    value: number
  }[]
}
